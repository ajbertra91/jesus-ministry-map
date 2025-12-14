import { Link } from '@tanstack/react-router';
import './Nav.css';
import IconRect from '../../icons/IconRect';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className='link orbitron-regular text-cyan'>
        <IconRect />
        <span>Home</span>
      </Link>
      <Link to="/map" className='link orbitron-regular text-cyan'>
        <IconRect />
        <span>Map</span>
      </Link>
      <Link to="/kings" className='link orbitron-regular text-cyan'>
        <IconRect />
        <span>Kings</span>
      </Link>
    </nav>
  );
};

export default Nav;