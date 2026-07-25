import { useState } from 'react';
import IconAppleSnake from '../../icons/IconAppleSnake';
import IconBrokenBabel from '../../icons/IconBrokenBabel';
import IconSkullRunes from '../../icons/IconSkullRunes';
import './DivineCouncilPage.css';
import IconChip from '../../icons/IconChip';
import IconHolySpirit from '../../icons/IconHolySpirit';
import CardDecoration from '../CardDecoration';

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
          <CardDecoration>
            <div className="card-title orbitron-regular text-cyan">{cards.FALL}</div>
            <IconAppleSnake />
            <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Genesis 3</div>
          </CardDecoration>
        </div>
        <div className={`grid-item card ${cards.WATCHERS.toLowerCase()}`} onClick={() => handleClick(cards.WATCHERS)}>
          <CardDecoration>
            <div className="card-title orbitron-regular text-cyan">{cards.WATCHERS}</div>
            <IconSkullRunes />
            <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Genesis 6:1-4</div>
          </CardDecoration>
        </div>
        <div className={`grid-item card ${cards.BABEL.toLowerCase()}`} onClick={() => handleClick(cards.BABEL)}>
          <CardDecoration>
            <div className="card-title orbitron-regular text-cyan">{cards.BABEL}</div>
            <IconBrokenBabel />
            <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Genesis 11:1-9; Deut. 32:8-9</div>
          </CardDecoration>
        </div>
      </div>
      <div className="messiah-container">
        <div className="circuit-lines-container">
          <div className="circuit-lines-top-left-container">
            <div className="circuit-lines top left first"></div>
            <div className="circuit-lines top left second"></div>
            <div className="circuit-lines top left third"></div>
          </div>
          <div className="circuit-lines-bottom-left-container">
            <div className="circuit-lines bottom left first"></div>
            <div className="circuit-lines bottom left second"></div>
            <div className="circuit-lines bottom left third"></div>
          </div>
        </div>
        <div className="circuit-chip-dye">
          <IconChip>
            <div className="orbitron-regular text-white">Messiah</div>
          </IconChip>
        </div>
        <div className="circuit-lines-container">
          <div className="circuit-lines-top-right-container">
            <div className="circuit-lines top right first"></div>
            <div className="circuit-lines top right second"></div>
            <div className="circuit-lines top right third"></div>
          </div>
          <div className="circuit-lines-bottom-right-container">
            <div className="circuit-lines bottom right"></div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className={`grid-item card ${cards.RESURRECTION.toLowerCase()}`} onClick={() => handleClick(cards.RESURRECTION)}>
          <CardDecoration>
            <div className="card-title orbitron-regular text-cyan">{cards.RESURRECTION}</div>
          </CardDecoration>
        </div>
        <div className={`grid-item card ${cards.HOLY_SPIRIT.toLowerCase().split(' ').join('-')}`} onClick={() => handleClick(cards.HOLY_SPIRIT)}>
          <CardDecoration>
            <div className="card-title orbitron-regular text-cyan">{cards.HOLY_SPIRIT}</div>
            <IconHolySpirit />
            <div className="card-sub-title orbitron-regular text-red font-10 uppercase">Acts 2</div>
          </CardDecoration>
        </div>
        <div className={`grid-item card ${cards.CHURCH.toLowerCase()}`} onClick={() => handleClick(cards.CHURCH)}>
          <CardDecoration>
            <div className="card-title orbitron-regular text-cyan">{cards.CHURCH}</div>
          </CardDecoration>
        </div >
      </div >
    </div >
  );
}

export default DivineCouncilPage;