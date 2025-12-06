import { type King } from '../../types/King';
import { GiHolyGrail } from "react-icons/gi";
import './KingButton.css';

const KingButton = ({ king, onClick }: { king: King; onClick: (king: King) => void }) => {
  if (!king) return null;

  return (
    <button
      className="king-button orbitron-regular text-cyan"
      onClick={() => onClick(king)}
    >
      {king.godly && <span className="king-button__holy-icon"><GiHolyGrail /></span>}
      <span className="king-button__text">
        <div className="name">{king.name}</div>
        <div className="reign">{king.reignStart} - {king.reignEnd} BC</div>
      </span>
    </button>
  );
};

export default KingButton;