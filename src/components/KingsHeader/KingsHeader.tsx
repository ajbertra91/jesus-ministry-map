import type { ReactNode } from 'react';
import IconGrid1 from '../../icons/IconGrid1';
import IconProtocol from '../../icons/IconProtocol';
import './KingsHeader.css';

const KingsHeader = ({ title }: { title?: string | ReactNode }) => {
  const generateRandomChars = (max: number) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < max; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  return (
    <header className="kings-header flex justify-space-between">
      <section className="kings-header-section protocol flex gap-10 align-center">
        <IconProtocol />
        <div className="small-text-container protocol flex flex-column">
          <div className="small-text text-red">{generateRandomChars(13)}</div>
          <div className="small-text text-red">{generateRandomChars(18)}</div>
          <div className="small-text text-red">{generateRandomChars(25)}</div>
          <div className="small-text text-red">{generateRandomChars(30)}</div>
        </div>
      </section>
      <section className="kings-header-section flex gap-5 align-center">
        <IconGrid1 />
        <div className="small-text-container flex flex-column">
          <div className="small-text text-cyan">{generateRandomChars(10)}</div>
          <div className="small-text text-cyan">{generateRandomChars(10)}</div>
          <div className="small-text text-cyan">{generateRandomChars(10)}</div>
          <div className="small-text text-cyan">{generateRandomChars(10)}</div>
          <div className="small-text text-cyan">{generateRandomChars(10)}</div>
          <div className="small-text text-cyan">{generateRandomChars(10)}</div>
        </div>
        {title}
      </section>
    </header>
  );
};

export default KingsHeader;