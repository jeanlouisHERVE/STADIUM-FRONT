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
  <div className="AsideNavbar">
    <div className="AsideNavbar-ProfileCard-main">
      <img className="AsideNavbar-ProfileCard-MainPicture" src={Avatar} alt="" />
      <h2 className="AsideNavbar-ProfileCard-Name">Prénom</h2>
      <h3 className="AsideNavbar-ProfileCard-Title">Titre</h3>
      <div className="AsideNavbar-ProfileCard-ProfilePictureContainer">
        <img className="AsideNavbar-ProfileCard-ProfilePicture" src={Avatar2} alt="" />
        <img className="AsideNavbar-ProfileCard-ProfilePicture" src={Avatar3} alt="" />
        <img className="AsideNavbar-ProfileCard-ProfilePicture" src={Avatar4} alt="" />
        <div className="AsideNavbar-ProfileCard-AddPicture"><span className=" material-icons">add</span></div>
      </div>
      <a className="AsideNavbar-ProfileCard-Link" href="">changer de profil</a>
      <a className="AsideNavbar-ProfileCard-Link" href="">gestion de profil</a>
    </div>

    <Nav className="AsideNavbar-Navbar-main">
      <NavMenu className="AsideNavbar-Navbar-ul">
        <NavLink className="AsideNavbar-Navbar-item"><span className="material-icons">home</span><span className="AsideNavbar-Navbar-category">home</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span className="material-icons">calendar_today</span><span className="AsideNavbar-Navbar-category">planning</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span className="material-icons">sports_martial_arts</span><span className="AsideNavbar-Navbar-category">cours</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span className="material-icons">today</span><span className="AsideNavbar-Navbar-category">evenements</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span className="material-icons">mark_email_unread</span><span className="AsideNavbar-Navbar-category">messages</span></NavLink>
        <NavLink className="AsideNavbar-Navbar-item"><span className="material-icons">settings</span><span className="AsideNavbar-Navbar-category">réglages</span></NavLink>
      </NavMenu>
    </Nav>
  </div>
);

// == Export
export default AsideNavbar;
