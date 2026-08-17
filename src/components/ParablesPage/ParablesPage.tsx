import { useMemo, useState } from 'react';
import { useGetParables } from '../../hooks/useGetParables';
import type { Parable, ParableBranch } from '../../types';
import Modal from '../Modal';
import KingsHeader from '../KingsHeader';
import PageTitle from '../PageTitle';
import './ParablesPage.css';

type NodeLayout = { x: number; y: number };

type ConstellationLayout = {
  nodes: NodeLayout[];
  edges: [number, number][];
};

// Places N nodes on an ellipse inscribed in the 480x300 viewBox, then
// connects ring neighbors (cycle) plus two cross-links for a constellation
// look. Works for any N, not just 6.
const getConstellationLayout = (n: number): ConstellationLayout => {
  const cx = 240;
  const cy = 155;
  const rx = 195;
  const ry = 118;

  const nodes: NodeLayout[] = [];
  for (let i = 0; i < n; i += 1) {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / Math.max(n, 1);
    nodes.push({
      x: Math.round(cx + rx * Math.cos(angle)),
      y: Math.round(cy + ry * Math.sin(angle)),
    });
  }

  const seen = new Set<string>();
  const edges: [number, number][] = [];
  const addEdge = (a: number, b: number) => {
    if (a === b || a < 0 || b < 0 || a >= n || b >= n) return;
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (seen.has(key)) return;
    seen.add(key);
    edges.push([a, b]);
  };

  for (let i = 0; i < n; i += 1) {
    addEdge(i, (i + 1) % n);
  }
  if (n >= 4) {
    const half = Math.floor(n / 2);
    addEdge(0, half);
    addEdge(1, (half + 1) % n);
  }

  return { nodes, edges };
};

const BRANCH_ACCENT: Record<string, string> = {
  kingdom: 'green',
  value: 'yellow',
  mercy: 'red',
  vigilance: 'orange',
  judgment: 'purple',
  'johns-figures': 'cyan',
};

const monogram = (title: string) => {
  const words = title.replace(/^The\s+/i, '').split(' ').filter(Boolean);
  const letters = words.slice(0, 2).map((word) => word[0]);
  return letters.join('').toUpperCase();
};

type Vec = { x: number; y: number };

type OrthoEdge = {
  axisFirst: 'h' | 'v';
  a: NodeLayout;
  b: NodeLayout;
  corner1: NodeLayout;
  corner2: NodeLayout;
};

// Stepped (Z) right-angle route a->b with two bends instead of one, so
// several strands can run parallel to it and still land on clean Manhattan
// jogs, like a ribbon cable routed around a board. `bendFrac` slides where
// the middle jog sits, so parallel bundles don't all kink in the same spot.
const buildOrthoEdge = (a: NodeLayout, b: NodeLayout, bendFrac = 0.5): OrthoEdge => {
  const adx = Math.abs(b.x - a.x);
  const ady = Math.abs(b.y - a.y);
  if (adx >= ady) {
    const midX = a.x + (b.x - a.x) * bendFrac;
    return { axisFirst: 'h', a, b, corner1: { x: midX, y: a.y }, corner2: { x: midX, y: b.y } };
  }
  const midY = a.y + (b.y - a.y) * bendFrac;
  return { axisFirst: 'v', a, b, corner1: { x: a.x, y: midY }, corner2: { x: b.x, y: midY } };
};

const RIBBON_SPACING = 3;
// Offsets for a 4-conductor bundle, symmetric about the centerline.
const RIBBON_OFFSETS = [-1.5, -0.5, 0.5, 1.5].map((n) => n * RIBBON_SPACING);

// One conductor of the bundle, shifted `offset` px perpendicular to the
// route's centerline. Shifting the constant coordinate of each straight
// run keeps every strand parallel and staggers the bends into a staircase.
const ribbonStrandPath = (edge: OrthoEdge, offset: number) => {
  const { axisFirst, a, b, corner1 } = edge;
  if (axisFirst === 'h') {
    const ay = a.y + offset;
    const midX = corner1.x + offset;
    const by = b.y + offset;
    return `M ${a.x} ${ay} L ${midX} ${ay} L ${midX} ${by} L ${b.x} ${by}`;
  }
  const ax = a.x + offset;
  const midY = corner1.y + offset;
  const bx = b.x + offset;
  return `M ${ax} ${a.y} L ${ax} ${midY} L ${bx} ${midY} L ${bx} ${b.y}`;
};

const strandEndpoint = (edge: OrthoEdge, offset: number, end: 'a' | 'b'): NodeLayout => {
  if (edge.axisFirst === 'h') {
    return end === 'a' ? { x: edge.a.x, y: edge.a.y + offset } : { x: edge.b.x, y: edge.b.y + offset };
  }
  return end === 'a' ? { x: edge.a.x + offset, y: edge.a.y } : { x: edge.b.x + offset, y: edge.b.y };
};

// Direction the strand departs `a` in, or arrives at `b` from — both ends
// share the same axis since the route starts and ends on it either side
// of the middle jog.
const strandDir = (edge: OrthoEdge): Vec => {
  const sx = Math.sign(edge.b.x - edge.a.x) || 1;
  const sy = Math.sign(edge.b.y - edge.a.y) || 1;
  return edge.axisFirst === 'h' ? { x: sx, y: 0 } : { x: 0, y: sy };
};

// Point along a strand, `dist` px out from the node along its own travel
// direction, for hanging a pin-comb tick off of.
const tickPoint = (edge: OrthoEdge, offset: number, end: 'a' | 'b', dist = 13): NodeLayout => {
  const base = strandEndpoint(edge, offset, end);
  const dir = strandDir(edge);
  const sign = end === 'a' ? 1 : -1;
  return { x: base.x + dir.x * dist * sign, y: base.y + dir.y * dist * sign };
};

// Short perpendicular stroke crossing a strand near its node, like a pin
// header comb where the bundle breaks out to the connector.
const pinTick = (point: NodeLayout, dir: Vec, len = 6) => {
  const perpX = -dir.y * (len / 2);
  const perpY = dir.x * (len / 2);
  return `M ${point.x + perpX} ${point.y + perpY} L ${point.x - perpX} ${point.y - perpY}`;
};

const ParablesPage = () => {
  const { data } = useGetParables();
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const [selectedParable, setSelectedParable] = useState<Parable | null>(null);
  const [missingIcons, setMissingIcons] = useState<Set<string>>(new Set());

  const branches = data?.branches ?? [];
  const parablesById = useMemo(() => {
    const map = new Map<string, Parable>();
    (data?.parables ?? []).forEach((parable) => map.set(parable.id, parable));
    return map;
  }, [data]);

  const activeBranch: ParableBranch | undefined = activeBranchId
    ? branches.find((branch) => branch.id === activeBranchId)
    : branches[0];

  const { nodes: nodeLayout, edges } = useMemo(
    () => getConstellationLayout(activeBranch?.parableIds.length ?? 0),
    [activeBranch?.parableIds.length],
  );

  return (
    <div className="parables-page">
      <PageTitle title="Parables of the Kingdom" />
      <KingsHeader title={<h1 className="title orbitron-bold text-3xl text-cyan mb-4">Parables of the Kingdom</h1>} />
      <p className="orbitron-regular text-white intro">
        {(data?.parables ?? []).length} parables across Matthew, Mark, Luke, and John, wired into {branches.length} branches. Select a branch, then a node, to read the source.
      </p>

      <div className="branch-tabs">
        {branches.map((branch) => (
          <button
            key={branch.id}
            className={`branch-tab orbitron-regular text-cyan accent-${BRANCH_ACCENT[branch.id] ?? 'cyan'} ${activeBranch?.id === branch.id ? 'is-active' : ''}`}
            onClick={() => setActiveBranchId(branch.id)}
          >
            <span className="branch-tab-dot" />
            {branch.label}
          </button>
        ))}
      </div>

      {activeBranch && (
        <p className="orbitron-regular text-red uppercase font-10 tagline">{activeBranch.tagline}</p>
      )}

      {activeBranch && (
        <div className="constellation-panel">
          <div className={`constellation accent-${BRANCH_ACCENT[activeBranch.id] ?? 'cyan'}`}>
            <svg className="constellation-lines" viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet">
              {edges.map(([fromIdx, toIdx], edgeIdx) => {
                const from = nodeLayout[fromIdx];
                const to = nodeLayout[toIdx];
                // Stagger where each bundle's middle jog sits so parallel
                // runs don't all kink at the same column/row.
                const bendFrac = 0.35 + (0.3 * ((fromIdx * 7 + toIdx * 13 + edgeIdx) % 5)) / 4;
                const edge = buildOrthoEdge(from, to, bendFrac);
                const dir = strandDir(edge);
                return (
                  <g key={`${fromIdx}-${toIdx}`} className="constellation-edge-group">
                    {RIBBON_OFFSETS.map((offset) => (
                      <path
                        key={offset}
                        className="constellation-strand-glow"
                        d={ribbonStrandPath(edge, offset)}
                      />
                    ))}
                    {RIBBON_OFFSETS.map((offset) => (
                      <path key={offset} className="constellation-strand" d={ribbonStrandPath(edge, offset)} />
                    ))}
                    {RIBBON_OFFSETS.map((offset) => (
                      <path
                        key={`tick-a-${offset}`}
                        className="constellation-tick"
                        d={pinTick(tickPoint(edge, offset, 'a'), dir)}
                      />
                    ))}
                    {RIBBON_OFFSETS.map((offset) => (
                      <path
                        key={`tick-b-${offset}`}
                        className="constellation-tick"
                        d={pinTick(tickPoint(edge, offset, 'b'), dir)}
                      />
                    ))}
                    <rect
                      className="constellation-junction"
                      x={edge.corner1.x - 6}
                      y={edge.corner1.y - 6}
                      width={12}
                      height={12}
                    />
                    <rect
                      className="constellation-junction"
                      x={edge.corner2.x - 6}
                      y={edge.corner2.y - 6}
                      width={12}
                      height={12}
                    />
                  </g>
                );
              })}
              {nodeLayout.map((node, idx) => (
                <g key={idx} className="constellation-via">
                  <rect x={node.x - 5} y={node.y - 5} width={10} height={10} className="constellation-via-pad" />
                  <circle cx={node.x} cy={node.y} r={2} className="constellation-via-dot" />
                </g>
              ))}
            </svg>

            {activeBranch.parableIds.map((parableId, idx) => {
              const parable = parablesById.get(parableId);
              const layout = nodeLayout[idx];
              if (!parable || !layout) return null;
              const isSelected = selectedParable?.id === parable.id;

              return (
                <button
                  key={parableId}
                  className={`constellation-node ${isSelected ? 'is-selected' : ''}`}
                  style={{ left: `${(layout.x / 480) * 100}%`, top: `${(layout.y / 300) * 100}%` }}
                  onClick={() => setSelectedParable(parable)}
                >
                  <span className="node-chip">
                    <span className="node-chip-pins" />
                    <span className="node-chip-badge orbitron-regular">{parable.refs.length}G</span>
                    {missingIcons.has(parable.id) ? (
                      <span className="node-chip-monogram orbitron-bold">{monogram(parable.title)}</span>
                    ) : (
                      <img
                        className="node-chip-icon"
                        src={`${import.meta.env.BASE_URL}images/parables/${parable.id}.png`}
                        alt=""
                        onError={() => setMissingIcons((prev) => new Set(prev).add(parable.id))}
                      />
                    )}
                  </span>
                  <span className="node-label orbitron-regular text-cyan font-10">{parable.title}</span>
                </button>
              );
            })}
          </div>

          <div className="constellation-readout">
            <p className="readout-heading orbitron-regular text-red uppercase font-10">Branch Index</p>
            <ul className="readout-list">
              {activeBranch.parableIds.map((parableId) => {
                const parable = parablesById.get(parableId);
                if (!parable) return null;
                return (
                  <li key={parableId} className="readout-item">
                    <button
                      className="readout-item-button orbitron-regular font-10"
                      onClick={() => setSelectedParable(parable)}
                    >
                      <span className="text-cyan">{parable.title}</span>
                      <span className="text-white readout-ref">
                        {parable.refs.map((ref) => `${ref.gospel.slice(0, 3)} ${ref.ref}`).join(' / ')}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="readout-footer orbitron-regular text-white font-8">
              {branches.length} branches // {(data?.parables ?? []).length} entries logged
            </p>
          </div>
        </div>
      )}

      <Modal open={!!selectedParable} onClose={() => setSelectedParable(null)}>
        {selectedParable && (
          <div className="parable-detail">
            <span className="corner-bracket top-left" />
            <span className="corner-bracket top-right" />
            <span className="corner-bracket bottom-left" />
            <span className="corner-bracket bottom-right" />
            <p className="orbitron-regular text-red uppercase font-10">
              {branches.find((branch) => branch.id === selectedParable.branchId)?.label}
            </p>
            <h2 className="orbitron-bold text-cyan">{selectedParable.title}</h2>
            <div className="parable-refs">
              {selectedParable.refs.map((ref) => (
                <span key={`${ref.gospel}-${ref.ref}`} className="parable-ref orbitron-regular text-yellow font-10">
                  {ref.gospel} {ref.ref}
                </span>
              ))}
            </div>
            <p className="orbitron-regular text-white parable-summary">{selectedParable.summary}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ParablesPage;
