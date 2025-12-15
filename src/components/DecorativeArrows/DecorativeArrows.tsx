import IconArrows from '../../icons/IconArrows/IconArrows';
import IconStarCircle from '../../icons/IconStarCircle';
import './DecorativeArrows.css';

const DecorativeArrows = () => {
  return (
    <div className="decorative-arrows">
      <IconArrows dir="left" />
      <div className="decorative-arrows-stars">
        <IconStarCircle />
        <IconStarCircle />
        <IconStarCircle />
      </div>
      <IconArrows dir="right" />
    </div>
  );
};

export default DecorativeArrows;