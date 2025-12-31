import './IconChip.css';

interface IconChipProps {
  children: React.ReactElement;
}

const IconChip = ({ children }: IconChipProps) => {
  return (
    <div className="icon-chip-container">
      <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g className="icon-chip" id="chip-2" transform="matrix(1.12619,0,0,1.01896,-1.74875,-0.519049)">
          <path className="outer-frame" d="M28.729,0.509L15.584,0.562L13.04,3.182L2.326,3.193L1.553,3.886L1.636,27.34L5.905,31.751L28.667,31.914L29.933,30.634L29.967,1.787L28.729,0.509Z" />
          <path className="inner" d="M5.491,4.084L4.579,4.996L4.579,10.567L3.4,11.746L3.4,22.029L4.662,23.291L4.662,28.948L5.508,29.794L27.192,29.794L28.118,28.868L28.118,23.436L29.178,22.376L29.178,11.571L28.189,10.582L28.189,4.988L27.306,4.105L5.491,4.084Z" />
        </g>
      </svg>
      <div className="icon-chip-content">{children}</div>
    </div>
  );
}

export default IconChip;