import React from 'react';
import logo from '../../logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser, faClapperboard, faChevronUp,
  faPen, faPlus, faMinus, faFire, faStar, faCircleUser
  } from '@fortawesome/free-solid-svg-icons';
import { faGoogle as faGoogleBrand } from '@fortawesome/free-brands-svg-icons';

const AdminPage = () => {
  return (
    <div>

      
    <div className="sidebar">
      <ul>
        <li className="no-bullets">
          <a href="#submenu1" data-bs-toggle="collapse" className="nav-link link-light align-middle">
            <FontAwesomeIcon icon={faClipboardUser} />
            Profile <FontAwesomeIcon icon={faChevronUp} className="float-right" />
          </a>
          <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">

            <li><a href=" " target="iframe_a">
                <img className="rounded-circle" style={{ width: 20, height: 20 }} src="https://mdbootstrap.com/img/Photos/Avatars/img%20(21).jpg" /> Full name
              </a>
            </li>

            <li><a href="./pages/Edit_profile.html" target="iframe_a">
                <FontAwesomeIcon icon={faCircleUser} /> Edit profile <sup>(...)</sup>
              </a>
            </li>
            
          </ul>
        </li>
        <li className="no-bullets">
          <a href="#submenu2" data-bs-toggle="collapse" className="nav-link link-light align-middle">
            <FontAwesomeIcon icon={faClapperboard} />
            Movies <FontAwesomeIcon icon={faChevronUp} className="float-right" />
          </a>
          <ul className="collapse show nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">

            <li><a href="/admin/MovieEdit" target="iframe_a">
                <FontAwesomeIcon icon={faPen} /> Edit Movie <sup>(...)</sup>
              </a>
            </li>

            <li><a href="/admin/movieAdd" target="iframe_a"> 
                <FontAwesomeIcon icon={faPlus} /> Add Movie <sup>(working)</sup>
              </a>
            </li>

            <li><a href="#" target="iframe_a"> 
                <FontAwesomeIcon icon={faMinus} /> Remove Movie
              </a>
            </li>

            <li><a href="#" target="iframe_a"> 
                <FontAwesomeIcon icon={faFire} /> Popular Movies
              </a>
            </li>

            <li><a href="/admin/movieAdd"> 
                <FontAwesomeIcon icon={faStar} /> Favourite Movies
              </a>
            </li>

          </ul>
        </li>
        <a href="#hotkeys"></a>
        <a href="#google">
          <FontAwesomeIcon icon={faGoogleBrand} />Google Analytics
        </a>

        <footer style={{ position: 'fixed', bottom: 0, height: 60, width: 'inherit', display: 'block' }} className="align-items-center">
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

      <div className="main-absolute">
        <iframe
          title="Admin Content"
          name="iframe_a"
          className="rounded-3"
          style={{ height: '100%', width: '100%' }}
          src="/about"
        />
      </div>
    </div>
  );
};

export default AdminPage;
