import type { Entry } from '../../types';
import { useState } from 'react';
import { PiDisc } from "react-icons/pi";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { useGetDaniel11 } from '../../hooks/useGetDaniel11';
import KingsHeader from '../KingsHeader';
import Button from '../Button';
import InfoCard from '../InfoCard';
import './DanielPage.css';

const DanielPage = () => {
  const { data } = useGetDaniel11();
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);

  const handleClick = (entry: any) => {
    setSelectedEntry(entry);
  };

  return (
    <div className="daniel-page">
      <KingsHeader title={<h1 className="title orbitron-bold text-3xl text-cyan mb-4">The 400 Silent Years</h1>} />
      <p className="orbitron-regular text-white">Daniel 11 details in advance, what is typically called the 400 silent years between testiments.</p>

      <div className="grid">
        <section className="grid-item">
          <div className="item-row header-row flex gap-10">
            <p className="orbitron-regular text-cyan">Prophecies</p>
            <p className="orbitron-regular text-cyan">Fullfillments</p>
          </div>

          {data?.entries.map((entry) => (
            <div key={entry?.dates} className="item-row flex gap-10">
              <span className="icon-cell--large"><PiDisc /></span>
              <Button className="item-content text-left" onClick={() => handleClick(entry)}>
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
              </Button>
            </div>
          ))}

        </section>

        <section className="grid-item">
          {!selectedEntry && <p className="orbitron-regular text-white">To read the full details of Daniel 11, please refer to a complete Bible resource.</p>}
          {selectedEntry && (
            <InfoCard variant="one">
              <div className="selected-entry-details">
                <div className="img">
                  <img src="/assets/images/daniel-page/map-11-5.png" alt="Daniel 11 Illustration" />
                </div>
                <p className="orbitron-bold text-cyan mb-2">Daniel {selectedEntry?.verses}</p>
                <p className="orbitron-regular text-yellow"><strong>Prophecy:</strong> {selectedEntry?.kjvText}</p>
                <p className="orbitron-regular text-white"><strong>Fulfillment:</strong> {selectedEntry?.historicalFulfillment}</p>
              </div>
            </InfoCard>
          )}
        </section>
      </div>
    </div>
  );
};

export default DanielPage;