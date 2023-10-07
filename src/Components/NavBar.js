import React,{useState} from 'react';

import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Import your Navbar styles if you have any
import Logo from '../Assets/pngwing.com.png';
import ViewListIcon from '@mui/icons-material/ViewList';

const Navbar = () => {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
 
  return (
    <nav className="navbar">

      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img id="logo" src={Logo}/>
          CANINECONNECT {/* You can insert your logo or site name */}
        </Link>

        <ul className="nav-menu">

          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/Dogs" className="nav-links">
              Dogs
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Vehicles" className="nav-links">
              Vehicles
            </Link>
          </li>
          
          
          
        </ul>
        {/* <button>
              <ViewListIcon className='menu-icon'/>
        </button> */}

        


        {/* <div className={`nav-menu ${menuVisible ? 'active' : ''}`}>
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/about" className="nav-links">
            About
          </Link>
          <Link to="/Vehicles" className="nav-links">
            Vehicles
          </Link>
        </div> */}

        {/* <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${menuVisible ? 'fa-times' : 'fa-bars'}`}></i>
        </div> */}
      </div>
      
    </nav>
  );
};

export default Navbar;
