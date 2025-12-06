import type { King } from "../../types/King";
import { useState } from "react";
import { useGetKings } from "../../hooks/useGetKings";
import Modal from "../Modal/Modal";
import KingButton from "../KingButton";
import './Kings.css';

const Kings = () => {
  const { data: kingsData, isLoading, error } = useGetKings();
  const [kingToDisplay, setKingToDisplay] = useState<King | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleShowKing = (king: King) => {
    setKingToDisplay(king);
    setOpenModal(true);
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
        <h1 className="orbitron-bold text-3xl text-cyan mb-4">The Kings of Israel</h1>
        <section className="kings-columns-container">
          <ul>
            {kingsData?.kings?.kingdomOfJudah?.map((king: King, idx) => (
              [0, 1, 2].includes(idx) ? (
                <li key={king.name}>
                  <KingButton
                    king={king}
                    onClick={() => handleShowKing(king)}
                  />
                </li>) : null
            ))}
          </ul>
          <ul>
            {kingsData?.kings?.kingdomOfJudah?.map((king: King, idx) => (
              [0, 1, 2].includes(idx) ? null : (
                <li key={king.name}>
                  <KingButton
                    king={king}
                    onClick={() => handleShowKing(king)}
                  />
                </li>
              )
            ))}
          </ul>
          <ul>
            {kingsData?.kings?.kingdomOfIsrael?.map((king: King) => (
              <li key={king.name}>
                <KingButton
                  king={king}
                  onClick={() => handleShowKing(king)}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>

        <h3>{kingToDisplay?.name}</h3>
        <p>King of {kingToDisplay?.kingdom || 'kingdom'}</p>
        <p>Reign: {kingToDisplay?.reignStart} to {kingToDisplay?.reignEnd}</p>
        <p>Dynasty: {kingToDisplay?.dynasty || 'N/A'}</p>
        <h4>Notable Events:</h4>
        <ul>
          {kingToDisplay?.notableEvents?.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <h4>Scriptures:</h4>
        <ul>
          {kingToDisplay?.scriptures?.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <h4>Prophets:</h4>
        <ul>
          {kingToDisplay?.prophets?.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default Kings;