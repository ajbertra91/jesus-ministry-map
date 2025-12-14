import { Si1Password, SiAidungeon, SiAndela, SiGoland, SiMultisim } from "react-icons/si";
import { MdDoubleArrow } from "react-icons/md";
import { GiAbstract030 } from "react-icons/gi";
import { Link } from "@tanstack/react-router";
import './LargeBrightBar.css';
import DecorativeArrows from "../DecorativeArrows/DecorativeArrows";
import BarPatternCanvas from "../../icons/BarPatternCanvas";

const LargeBrightBar = ({}) => {
  return (
    <div className="large-bright-bar">

      <div className="bar transparent-bar">
        <span className="decoration decoration--one"><SiGoland /></span>
        <span className="decoration decoration--two"><SiMultisim /></span>
        <span className="decoration decoration--three">
          <span>Cras in magna nibh</span>
          <span>Lorem ipsum deloram</span>
          <SiAndela />
          <SiAndela />
        </span>
        <span className="decoration decoration--four">
          <MdDoubleArrow />
          <MdDoubleArrow />
          <MdDoubleArrow />
        </span>
      </div>
      <div className="bar bright-bar">
        <span className="decoration decoration--one"><SiAidungeon /></span>
        <span className="decoration decoration--two"><Si1Password /></span>
        <span className="decoration decoration--three"><SiAndela /></span>
      </div>
      <div className="header">
        <Link className="header-button" to="/map">
          <h1 className="rajdhani-regular text-cyan">Welcome</h1>
        </Link>
      </div>
      <div className="sub-header">
        <p className="rajdhani-regular text-cyan">Explore the locations and events from the ministry of Jesus.</p>
      </div>
      <div className="bar transparent-bar alternate-bar">
        <span className="decoration decoration--one"><GiAbstract030 /></span>
        <span className="decoration decoration--two"><SiMultisim /></span>
        <span className="decoration decoration--three">
          <span>Cras in magna nibh</span>
          <span>Lorem ipsum deloram</span>
          <SiAndela />
          <SiAndela />
        </span>
      </div>
      <BarPatternCanvas>
        <DecorativeArrows />
      </BarPatternCanvas>
    </div>
  );
};

export default LargeBrightBar;
