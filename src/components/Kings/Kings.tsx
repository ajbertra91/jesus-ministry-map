import { GiHolyGrail } from "react-icons/gi";
import type { King } from "../../types/King.types";
import { useState } from "react";
import { useGetKings } from "../../hooks/useGetKings";
import Modal from "../Modal/Modal";
import KingButton from "../KingButton";
import KingsHeader from "../KingsHeader/KingsHeader";
import './Kings.css';
import InfoSection from "../InfoSection";
import { FaCrown } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";
import BarCode from "../BarCode";


const Kings = () => {
  const { data: kingsData, isLoading, error } = useGetKings();
  const [kingToDisplay, setKingToDisplay] = useState<King | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleShowKing = (king: King) => {
    setKingToDisplay(king);
    setOpenModal(true);
  };

  const calculateHeight = (king: King) => {
    if (!king) {
      return 0;
    }
    const totalYears = Number(king.reignStart) - Number(king.reignEnd);
    if (totalYears <= 0) {
      return 10; // Minimum height for visibility
    } else {
      return totalYears * 10;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading kings data.</div>;
  }

  return (
    <>
      <div className="kings-page">
        <KingsHeader title={<h1 className="title orbitron-bold text-3xl text-cyan mb-4">The Kings of Israel</h1>} />
        <section className="kings-grid-container">
          <div className="flex justify-center kings-unified">
            <ul>
              {kingsData?.kings?.kingdomOfJudah?.map((king: King, idx) => (
                [0, 1, 2].includes(idx) ? (
                  <li key={king.name}>
                    <KingButton
                      king={king}
                      onClick={() => handleShowKing(king)}
                      style={{ height: `${calculateHeight(king)}px` }}
                      split
                    />
                  </li>) : null
              ))}
            </ul>
          </div>
          <div className="flex justify-end kings-judah">
            <ul>
              {kingsData?.kings?.kingdomOfJudah?.map((king: King, idx) => (
                [0, 1, 2].includes(idx) ? null : (
                  <li key={king.name}>
                    <KingButton
                      king={king}
                      onClick={() => handleShowKing(king)}
                      style={{ height: `${calculateHeight(king)}px` }}
                      split
                    />
                  </li>
                )
              ))}
            </ul>
          </div>
          <div className="timeline">
            <div className="timeline-label label-900 orbitron-bold text-cyan">900 BC</div>
            <div className="timeline-label label-800 orbitron-bold text-cyan">800 BC</div>
            <div className="timeline-label label-700 orbitron-bold text-cyan">700 BC</div>
            <div className="timeline-label label-600 orbitron-bold text-cyan">600 BC</div>
          </div>
          <div className="flex justify-start kings-israel">
            <ul>
              {kingsData?.kings?.kingdomOfIsrael?.map((king: King) => (
                <li key={king.name}>
                  <KingButton
                    king={king}
                    onClick={() => handleShowKing(king)}
                    style={{ height: `${calculateHeight(king)}px` }}
                    split
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="king-modal-info">
          <InfoSection label="Name" detail="resources v.2361.188">
            <h3 className="orbitron-bold text-cyan flex align-center gap-6">
              <span>{kingToDisplay?.name}</span>
              {kingToDisplay?.godly && <span className="king-button__holy-icon" title="Was a Godly king"><GiHolyGrail /></span>}
            </h3>
          </InfoSection>
          <InfoSection label="Details" detail="dtl_dlcas_8D0095">
            <p className="text-cyan flex align-center gap-6"><FaCrown /> King of {kingToDisplay?.kingdom || 'kingdom'}</p>
            <p className="text-cyan">Reign: {kingToDisplay?.reignStart} to {kingToDisplay?.reignEnd}</p>
            <p className="text-cyan">Dynasty: {kingToDisplay?.dynasty || 'N/A'}</p>
          </InfoSection>
          <InfoSection label="Notable Events" detail="ntbl_evntA00000.51">
            <ul>
              {kingToDisplay?.notableEvents?.map((event, index) => (
                <li key={index} className="text-cyan">{event}</li>
              ))}
            </ul>
          </InfoSection>
          <InfoSection label="Scriptures" detail="scripture kjv 1611.20">
            <ul>
              {kingToDisplay?.scriptures?.map((event, index) => (
                <li key={index} className="text-cyan flex align-center gap-6"><FaBookBible /> {event}</li>
              ))}
            </ul>
          </InfoSection>
          <InfoSection label="Prophets" detail="prpht p.abc100000.120">
            <ul>
              {kingToDisplay?.prophets?.map((event, index) => (
                <li key={index} className="text-cyan">{event}</li>
              ))}
            </ul>
          </InfoSection>
          <InfoSection label="Hight Priests" detail="prst p.tkl852700.1.09">
            <ul>
              {kingToDisplay?.highPriests?.map((event, index) => (
                <li key={index} className="text-cyan">{event}</li>
              ))}
            </ul>
          </InfoSection>
          <InfoSection label="Biological Aspectation" detail="">
            <div className="bar-code width-50-pc mt-4 h-60">
              <BarCode />
            </div>
          </InfoSection>
        </div>
      </Modal>
    </>
  );
};

export default Kings;