import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage';
import MovieAdd from './MovieAdd';
import MovieEdit from './MovieEdit';
import logo from '../../logo.svg';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faChevronUp, faChevronDown, faCircleUser, faClapperboard, faPen, faPlus, faMinus, faFire } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrand } from '@fortawesome/free-brands-svg-icons';

// ================================================================================================================

const AdminPage = () => {
  const [profileOpen, setProfileOpen] = useState(true);
  const [moviesOpen, setMoviesOpen] = useState(true);

  return (
    <div className="app-container">
      <div id="sidebar" className="sidebar">
        <ul>
          <li><a onClick={() => setProfileOpen(!profileOpen)} className="nav-link"> <FontAwesomeIcon icon={faClipboardUser} />
              Profile {profileOpen ? <FontAwesomeIcon icon={faChevronUp} className="float-right" /> : <FontAwesomeIcon icon={faChevronDown} className="float-right" />}
            </a>
            <ul className={profileOpen ? "show" : "collapse"}>
              <li><Link to="/profile" className="nav-link">
                <FontAwesomeIcon icon={faCircleUser} />
                Full Name
              </Link></li>
              <li><Link to="/editprofile" className="nav-link">
                <FontAwesomeIcon icon={faCircleUser} />
                Edit Profile
              </Link></li>
            </ul>
          </li>

          <li><a onClick={() => setMoviesOpen(!moviesOpen)} className="nav-link"> <FontAwesomeIcon icon={faClapperboard} />
              Movies {moviesOpen ? <FontAwesomeIcon icon={faChevronUp} className="float-right" /> : <FontAwesomeIcon icon={faChevronDown} className="float-right" />}
            </a>
            <ul className={moviesOpen ? "show" : "collapse"}>
              <li><Link to="/admin/movieEdit" className="nav-link">
                <FontAwesomeIcon icon={faPen} />
                Edit Movie
              </Link></li>
              <li><Link to="/admin/movieAdd" className="nav-link">
                <FontAwesomeIcon icon={faPlus} />
                Add Movie
              </Link></li>
              <li><Link to="/admin/movieRemove" className="nav-link">
                <FontAwesomeIcon icon={faMinus} />
                Remove Movie
              </Link></li>
              <li><Link to="/admin/popularMovies" className="nav-link">
                <FontAwesomeIcon icon={faFire} />
                Popular Movies
              </Link></li>
            </ul>
          </li>
          
          <li><Link href="#google" className="nav-link">
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
                alt="logo"
              />
              {' Apollo prj'}
            </h5>
          </footer>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/editprofile" element={<div>Edit Profile Page</div>} />
          <Route path="/movieedit" element={<div>Movie Edit Page</div>} />
          <Route path="/movieadd" element={<div>Movie Add Page</div>} />
          <Route path="/removemovie" element={<div>Remove Movie Page</div>} />
          <Route path="/popularmovies" element={<div>Popular Movies Page</div>} />
          <Route path="/favouritemovies" element={<div>Favourite Movies Page</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;

