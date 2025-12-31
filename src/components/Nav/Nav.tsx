import { Link } from '@tanstack/react-router';
import './Nav.css';
import IconRect from '../../icons/IconRect';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className='link orbitron-regular text-cyan'>
        <div className="bg-red" />
        <IconRect />
        <span>Home</span>
      </Link>
      <Link to="/map" className='link orbitron-regular text-cyan'>
        <div className="bg-red" />
        <IconRect />
        <span>Map</span>
      </Link>
      <Link to="/kings" className='link orbitron-regular text-cyan'>
        <div className="bg-red" />
        <IconRect />
        <span>Kings</span>
      </Link>
      <Link to="/daniel" className='link orbitron-regular text-cyan'>
        <div className="bg-red" />
        <IconRect />
        <span>Daniel</span>
      </Link>
      <Link to="/divine-council" className='link orbitron-regular text-cyan'>
        <div className="bg-red" />
        <IconRect />
        <span>Divine Council</span>
      </Link>
    </nav>
  );
};

export default Nav;