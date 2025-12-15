import './IconArrows.css';

interface IconArrowsProps {
  dir: 'left' | 'right';
}

const IconArrows = ({ dir }: IconArrowsProps) => {

  return (
    <div className={`icon-arrows ${dir}`}>
      <svg className="arrow-1" width="100%" height="100%" viewBox="0 0 16 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.074,0L15.627,0.079L11.253,16L15.704,31.994L11.074,32L0,16L11.074,0ZM6.171,10.075L6.171,21.776L2.24,16L6.171,10.075Z" />
      </svg>
      <svg className="arrow-2" width="100%" height="100%" viewBox="0 0 16 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.074,0L15.627,0.079L11.253,16L15.704,31.994L11.074,32L0,16L11.074,0ZM6.171,10.075L6.171,21.776L2.24,16L6.171,10.075Z" />
      </svg>
      <svg className="arrow-3" width="100%" height="100%" viewBox="0 0 16 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.074,0L15.627,0.079L11.253,16L15.704,31.994L11.074,32L0,16L11.074,0ZM6.171,10.075L6.171,21.776L2.24,16L6.171,10.075Z" />
      </svg>
    </div>
  );
};
export default IconArrows;