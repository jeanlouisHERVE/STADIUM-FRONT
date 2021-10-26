import './styles.scss';
import 
{ 
  Nav,
  NavMenu,
  NavLink
} from './AsideNavbarElements'
 
// == Composant
const AsideNavbar = () => (
  <div className="AsideNavbar">
    <div className="AsideNavbar-ProfileCard-main">
      <img className="AsideNavbar-ProfileCard-MainPicture" alt="" />
      <h2 className="AsideNavbar-ProfileCard-Name">Prénom</h2>
      <h3 className="AsideNavbar-ProfileCard-Title">Titre</h3>
      <div className="AsideNavbar-ProfileCard-ProfilePictureContainer">
        <img className="AsideNavbar-ProfileCard-ProfilePicture" alt="" />
        <img className="AsideNavbar-ProfileCard-ProfilePicture" alt="" />
        <img className="AsideNavbar-ProfileCard-ProfilePicture" alt="" />
      </div>
      <a className="AsideNavbar-ProfileCard-Link" href="">changer de profil</a>
      <a className="AsideNavbar-ProfileCard-Link" href="">gestion de profil</a>
    </div>

    <Nav className="AsideNavbar-Navbar-main">
      <NavMenu className="AsideNavbar-Navbar-ul">
        <NavLink className="AsideNavbar-Navbar-item"><span class="material-icons">home</span><span class="AsideNavbar-Navbar-category">home</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span class="material-icons">calendar_today</span><span class="AsideNavbar-Navbar-category">planning</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span class="material-icons">face</span><span class="AsideNavbar-Navbar-category">cours</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span class="material-icons">today</span><span class="AsideNavbar-Navbar-category">evenements</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span class="material-icons">mark_email_unread</span><span class="AsideNavbar-Navbar-category">messages</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span class="material-icons">settings</span><span class="AsideNavbar-Navbar-category">réglages</span></NavLink>
      </NavMenu>
    </Nav>
  </div>
);

// == Export
export default AsideNavbar;
