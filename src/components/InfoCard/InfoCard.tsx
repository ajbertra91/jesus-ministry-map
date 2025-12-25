import { type ReactNode } from 'react';
import './InfoCard.css';

interface InfoCardProps {
  children: ReactNode;
  variant?: 'one' | 'two';
}

const InfoCard = ({ children, variant }: InfoCardProps) => {
  const classes = ['info-card'];
  if (variant) {
    classes.push(`info-card--${variant}`);
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  );
};

export default InfoCard;