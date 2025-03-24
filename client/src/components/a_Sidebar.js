import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faChevronUp, faChevronDown, faCircleUser, faClapperboard, faPen, faPlus, faMinus, faFire } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrand } from '@fortawesome/free-brands-svg-icons';
import logo from '../logo.svg';
import './a_Sidebar.css';



const Sidebar = () => {
  const [profileOpen, setProfileOpen] = useState(true);
  const [moviesOpen, setMoviesOpen] = useState(true);

  return (
    <div id="sidebar" className="sidebar">
      <ul>
        <li><a onClick={() => setProfileOpen(!profileOpen)} className="nav-link"> <FontAwesomeIcon icon={faClipboardUser} />
          Profile  <FontAwesomeIcon icon={profileOpen ? faChevronUp : faChevronDown} />
        </a>
          <ul className={profileOpen ? "show" : "collapse"}>

            <li><Link to="/profile" className="nav-link"><FontAwesomeIcon icon={faCircleUser} />
              Full Name
            </Link></li>

            <li><Link to="/editprofile" className="nav-link"><FontAwesomeIcon icon={faCircleUser} />
              Edit Profile
            </Link></li>
            
          </ul>
        </li>

        <li><a onClick={() => setMoviesOpen(!moviesOpen)} className="nav-link"> <FontAwesomeIcon icon={faClapperboard} />
          Movies <FontAwesomeIcon icon={moviesOpen ? faChevronUp : faChevronDown} />
        </a>
          <ul className={moviesOpen ? "show" : "collapse"}>

            <li><Link to="movieEdit" className="nav-link"><FontAwesomeIcon icon={faPen} />
              Edit Movie
            </Link></li>

            <li><Link to="movieAdd" className="nav-link"><FontAwesomeIcon icon={faPlus} />
              Add Movie
            </Link></li>

            <li><Link to="about" className="nav-link"><FontAwesomeIcon icon={faMinus} />
              Remove Movie
            </Link></li>

            <li><Link to="about" className="nav-link"><FontAwesomeIcon icon={faFire} />
              Popular Movies
            </Link></li>

          </ul>
        </li>

        <li><Link href="about" className="nav-link">
          <FontAwesomeIcon icon={faGoogleBrand} />
          Google Analytics
        </Link>
        </li>
        <footer id="logofooter">
          <h5 className="link-light">
            <img
              src={logo}
              width="50" height="50"
              className="ms-4"
            />
            {' Apollo prj'}
          </h5>
        </footer>
      </ul>
    </div>
  );
};

export default Sidebar;