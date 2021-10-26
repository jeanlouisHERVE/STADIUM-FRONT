import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
const AsideNavbar = () => (
  <div className="AsideNavbar">
    <div className="AsideNavbar-ProfileCard-main">
        <img className="AsideNavbar-ProfileCard-MainPicture" alt="" />
        <h2 className="AsideNavbar-ProfileCard-Name">Prénom</h2>
        <h3 className="AsideNavbar-ProfileCard-Title">Titre</h3>

    </div>
    <a>changer de profil</a>
    <a>gestion de profil</a>
  </div>
);

// == Export
export default AsideNavbar;
