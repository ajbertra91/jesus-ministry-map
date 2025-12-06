import { Link } from '@tanstack/react-router';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/" className='link orbitron-regular text-cyan'>Home</Link>
      <Link to="/map" className='link orbitron-regular text-cyan'>Map</Link>
      <Link to="/kings" className='link orbitron-regular text-cyan'>Kings</Link>
    </nav>
  );
};

export default Nav;