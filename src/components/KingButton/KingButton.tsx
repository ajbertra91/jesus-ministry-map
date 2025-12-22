import { type King } from '../../types/King.types';
import { GiHolyGrail } from "react-icons/gi";
import './KingButton.css';
import CircuitBoard from '../Graphics/CircuitBoard/CircuitBoard';

interface KingButtonProps {
  king: King;
  onClick: (king: King) => void;
  style?: React.CSSProperties;
  split?: boolean;
}

const KingButton = ({ king, onClick, style, split = false }: KingButtonProps) => {
  if (!king) return null;

  return (
    <button
      className="king-button orbitron-regular text-cyan"
      onClick={() => onClick(king)}
      style={style}
      title={`Was ${king.godly ? '' : 'not'} a Godly King`}
    >
      <CircuitBoard>
        {king.godly && <span className="king-button__holy-icon"><GiHolyGrail /></span>}
        <span className={`king-button__text ${split ? 'king-button__text--split' : ''}`}>
          <div className="name">{king.name}</div>
          <div className="reign">{king.reignStart} - {king.reignEnd}</div>
        </span>
      </CircuitBoard>
    </button>
  );
};

export default KingButton;