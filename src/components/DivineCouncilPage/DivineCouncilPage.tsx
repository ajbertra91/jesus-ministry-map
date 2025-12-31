import { useState } from 'react';
import IconAppleSnake from '../../icons/IconAppleSnake';
import IconBrokenBabel from '../../icons/IconBrokenBabel';
import IconSkullRunes from '../../icons/IconSkullRunes';
import './DivineCouncilPage.css';
import IconChip from '../../icons/IconChip';

const cards = {
  FALL: 'Fall',
  WATCHERS: 'Watchers',
  BABEL: 'Babel',
  RESURRECTION: 'Resurrection',
  HOLY_SPIRIT: 'Holy Spirit',
  CHURCH: 'Church',
};

const DivineCouncilPage = () => {
  const [_, setSelectedCard] = useState<string>('');
  const handleClick = (card: string) => {
    if (!card) return;

    switch (card) {
      case cards.FALL:
        setSelectedCard(cards.RESURRECTION);
        break;
      case cards.WATCHERS:
        setSelectedCard(cards.HOLY_SPIRIT);
        break;
      case cards.BABEL:
        setSelectedCard(cards.CHURCH);
        break;
      default:
        return;
    }
  }

  return (
    <div className="divine-council-page">
      <div className="grid">
        <div className={`grid-item card ${cards.FALL.toLowerCase()}`} onClick={() => handleClick(cards.FALL)}>
          <div className="card-title orbitron-regular text-cyan">{cards.FALL}</div>
          <IconAppleSnake />
          <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Genesis 3</div>
        </div>
        <div className={`grid-item card ${cards.WATCHERS.toLowerCase()}`} onClick={() => handleClick(cards.WATCHERS)}>
          <div className="card-title orbitron-regular text-cyan">{cards.WATCHERS}</div>
          <IconSkullRunes />
          <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Genesis 6:1-4</div>
        </div>
        <div className={`grid-item card ${cards.BABEL.toLowerCase()}`} onClick={() => handleClick(cards.BABEL)}>
          <div className="card-title orbitron-regular text-cyan">{cards.BABEL}</div>
          <IconBrokenBabel />
          <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Genesis 11:1-9; Deut. 32:8-9</div>
        </div>
      </div>
      <div className="messiah-container">
        <IconChip>
          <div className="orbitron-regular text-white">Messiah</div>
        </IconChip>
      </div>
      <div className="grid">
        <div className={`grid-item card ${cards.RESURRECTION.toLowerCase()}`} onClick={() => handleClick(cards.RESURRECTION)}>
          <div className="card-title orbitron-regular text-cyan">{cards.RESURRECTION}</div>
        </div>
        <div className={`grid-item card ${cards.HOLY_SPIRIT.toLowerCase()}`} onClick={() => handleClick(cards.HOLY_SPIRIT)}>
          <div className="card-title orbitron-regular text-cyan">{cards.HOLY_SPIRIT}</div>
        </div>
        <div className={`grid-item card ${cards.CHURCH.toLowerCase()}`} onClick={() => handleClick(cards.CHURCH)}>
          <div className="card-title orbitron-regular text-cyan">{cards.CHURCH}</div>
        </div>
      </div>
    </div>
  );
}

export default DivineCouncilPage;