import { Link } from 'react-router-dom';
import './styles.scss';

import Avatar from './avataaars.svg';
import Avatar2 from './avataaars2.svg';
import Avatar3 from './avataaars3.svg';
import Avatar4 from './avataaars4.svg';
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
      <img className="AsideNavbarAdmin-ProfileCard-MainPicture" src={Avatar} alt="" />
      <h2 className="AsideNavbarAdmin-ProfileCard-Name">Prénom</h2>
      <h3 className="AsideNavbarAdmin-ProfileCard-Title">Titre</h3>
      <a className="AsideNavbarAdmin-ProfileCard-Link" href="">changer de profil</a>
      <a className="AsideNavbarAdmin-ProfileCard-Link" href="">gestion de profil</a>
    </div>
    <Nav className="AsideNavbarAdmin-Navbar-main">
      <NavMenu className="AsideNavbarAdmin-Navbar-ul">
        <NavLink className="AsideNavbarAdmin-Navbar-item"><span className="material-icons">home</span><span className="AsideNavbarAdmin-Navbar-category"><Link to="/backoffice/admin/association/14">home</Link></span></NavLink>
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
