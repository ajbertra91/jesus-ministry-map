import { useEffect, type ReactNode } from "react";
import './Modal.css'
import LetterGlitch from "../LetterGlitch";
import BarCode from "../BarCode";
// import IconBarCode from "../../icons/IconBarCode";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ open, onClose, children }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          x
        </button>
        <div className="modal-body">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            className="letter-glitch"
          />
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-footer">
            <BarCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;