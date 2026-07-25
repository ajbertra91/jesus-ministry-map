import './CardDecoration.css';

interface CardDecorationProps {
  children: React.ReactElement | React.ReactElement[];
}

const CardDecoration = ({ children }: CardDecorationProps) => {
  return (
    <div className="card-decoration">
      <div className="card-detail-container left">
        <div className="card-detail-1"></div>
        <div className="card-detail-2"></div>
        <div className="card-detail-3"></div>
      </div>
      {children}
      <div className="card-detail-container right">
        <div className="card-detail-1 right"></div>
        <div className="card-detail-2 right"></div>
        <div className="card-detail-3 right"></div>
      </div>
    </div>
  );
};

export default CardDecoration;