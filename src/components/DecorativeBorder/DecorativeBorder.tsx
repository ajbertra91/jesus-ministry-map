import { FaSquare } from "react-icons/fa";
import "./DecorativeBorder.css";

const DecorativeBorder = ({ dir = 'horizontal', className, ...rest }: { dir: 'horizontal' | 'vertical', className: string }) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const iconSize = dir === 'horizontal' ? screenWidth : screenHeight;
  const iconCount = Math.max(0, Math.floor(iconSize / 100)); // ensure an integer >= 0

  return (
    <div className={`decorative-border ${dir} ${className}`} {...rest}>
      {Array.from({ length: iconCount }, (_, i) => <FaSquare key={i} />)}
    </div>
  );
};

export default DecorativeBorder;