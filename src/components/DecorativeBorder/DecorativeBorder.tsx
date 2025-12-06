import { BiLogoMediumOld } from "react-icons/bi";
import "./DecorativeBorder.css";

const DecorativeBorder = ({ dir = 'horizontal', className, ...rest }: { dir: 'horizontal' | 'vertical', className: string }) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const iconSize = dir === 'horizontal' ? screenWidth : screenHeight;
  const iconCount = Math.max(0, Math.floor(iconSize / 20)); // ensure an integer >= 0

  return (
    <div className={`decorative-border ${dir} ${className}`} {...rest}>
      {Array.from({ length: iconCount }, (_, i) => <BiLogoMediumOld key={i} />)}
    </div>
  );
};

export default DecorativeBorder;