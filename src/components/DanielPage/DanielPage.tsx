import { useGetDaniel11 } from '../../hooks/useGetDaniel11';
import { PiDisc } from "react-icons/pi";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import KingsHeader from '../KingsHeader';
import './DanielPage.css';

const DanielPage = () => {
  const { data } = useGetDaniel11();

  return (
    <div className="daniel-page">
      <KingsHeader title={<h1 className="title orbitron-bold text-3xl text-cyan mb-4">The 400 Silent Years</h1>} />
      <p className="orbitron-regular text-white">Daniel 11 details in advance, what is typically called the 400 silent years between testiments.</p>
      <section className="mt-4">
        <div className="item-row header-row flex gap-10">
          <p className="orbitron-regular text-cyan">Prophecies</p>
          <p className="orbitron-regular text-cyan">Fullfillments</p>
        </div>
        {data?.entries.map((entry) => (
          <button key={entry?.dates} className="item-row flex gap-10">
            <span className="icon-cell--large"><PiDisc /></span>
            <span className="item-content">
              <span className="item-cell icon-cell--med">
                <div className="icon-container">
                  <PiDiamondsFourDuotone className='icon--med' />
                  <div className="decoration-text">certified to access</div>
                </div>
              </span>
              <span className="item-cell text-cell">
                <div className="item-text prophecy orbitron-regular text-cyan">{entry?.prophecy}</div>
                <div className="item-text verses orbitron-regular text-white">[ {entry?.verses} ]</div>
              </span>
            </span>
          </button>
        ))}
      </section>
    </div>
  );
};

export default DanielPage;