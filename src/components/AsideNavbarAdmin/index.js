import { Link } from 'react-router-dom';
import './styles.scss';

import Avatar from './avataaars.svg';
import
{
  Nav,
  NavMenu,
  NavLink,
} from './AsideNavbarElements';

// == Composant
const AsideNavbar = () => (
  <div className="AsideNavbarAdmin">
    <div className="AsideNavbarAdmin-ProfileCard-main">
      <div className="AsideNavbarAdmin-ProfileCard-Picture-Container">
        <img className="AsideNavbarAdmin-ProfileCard-MainPicture" src={Avatar} alt="" />
      </div>
      <div className="AsideNavbarAdmin-middleContainer">
        <h2 className="AsideNavbarAdmin-ProfileCard-Name">Prénom</h2>
        <h3 className="AsideNavbarAdmin-ProfileCard-Title">Titre</h3>
      </div>
      <div className="AsideNavbarAdmin-downContainer">
        <a className="AsideNavbarAdmin-ProfileCard-Link" href="">Deconnexion</a>
      </div>
    </div>
    <Nav className="AsideNavbarAdmin-Navbar-main">
      <NavMenu className="AsideNavbarAdmin-Navbar-ul">
        <NavLink className="AsideNavbarAdmin-Navbar-item">
          <span className="material-icons">home</span>
          <span className="AsideNavbarAdmin-Navbar-category"><Link to="/backoffice/admin/association/14">home</Link></span>
        </NavLink>
        <NavLink className="AsideNavbarAdmin-Navbar-item">
          <span className="material-icons">dvr</span>
          <span className="AsideNavbarAdmin-Navbar-category"><Link to="/backoffice/admin/association/14/gestionnaire">Gestionnaire</Link></span>
        </NavLink>
        <NavLink className="AsideNavbarAdmin-Navbar-item">
          <span className="material-icons">mark_email_unread</span>
          <span className="AsideNavbarAdmin-Navbar-category"><Link to="/backoffice/superadmin/messages">messages</Link></span>
        </NavLink>
        <NavLink className="AsideNavbarAdmin-Navbar-item"><span className="material-icons">settings</span><span className="AsideNavbarAdmin-Navbar-category"><Link to="/backoffice/superadmin/reglages">réglages</Link></span></NavLink>
      </NavMenu>
    </Nav>
  </div>
);

// == Export
export default AsideNavbar;
