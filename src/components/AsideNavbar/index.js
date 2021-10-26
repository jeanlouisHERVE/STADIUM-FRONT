import { Link } from 'react-router-dom';
import './styles.scss';

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
    
    <nav>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </nav>


  </div>
);

// == Export
export default AsideNavbar;
