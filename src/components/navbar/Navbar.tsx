import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Maria Clara & Rafael</span>
          </Link>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link to="/competencias" className="nav-link">Competências</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
