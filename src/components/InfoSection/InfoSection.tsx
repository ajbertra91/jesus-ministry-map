import type { PropsWithChildren } from 'react';
import './InfoSection.css';

interface InfoSectionProps extends PropsWithChildren {
  label: string;
  detail: string;
}

const InfoSection = ({ label, detail, children }: InfoSectionProps) => {
  return (
    <section className="info-section">
      <p className="info-section-label orbitron-regular text-red">{label}</p>
      <div className="info-section-divider"></div>
      <p className="info-section-visual-detail orbitron-regular text-red">{detail}</p>
      {children}
    </section>
  );
}

export default InfoSection;