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

const tracePath = (a: NodeLayout, b: NodeLayout) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);

  if (adx === 0 || ady === 0) {
    return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  }

  const diag = Math.min(adx, ady);
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);

  if (adx >= ady) {
    const cornerX = b.x - sx * diag;
    return `M ${a.x} ${a.y} L ${cornerX} ${a.y} L ${b.x} ${b.y}`;
  }
  const cornerY = b.y - sy * diag;
  return `M ${a.x} ${a.y} L ${a.x} ${cornerY} L ${b.x} ${b.y}`;
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
              {edges.map(([fromIdx, toIdx]) => (
                <g key={`${fromIdx}-${toIdx}`}>
                  <path
                    className="constellation-edge-glow"
                    d={tracePath(nodeLayout[fromIdx], nodeLayout[toIdx])}
                  />
                  <path
                    className="constellation-edge"
                    d={tracePath(nodeLayout[fromIdx], nodeLayout[toIdx])}
                  />
                </g>
              ))}
              {nodeLayout.map((node, idx) => (
                <circle key={idx} className="constellation-via" cx={node.x} cy={node.y} r={3.5} />
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
