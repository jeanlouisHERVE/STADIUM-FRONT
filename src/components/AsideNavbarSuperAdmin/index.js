import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { logoutUser } from '../../actions/login';
import Avatar from './avataaars.svg';
import
{
  Nav,
  NavMenu,
  NavLink,
} from './AsideNavbarElements';

// == Composant
const AsideNavbarSuperAdmin = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="AsideNavbarSuperAdmin">
      <div className="AsideNavbarSuperAdmin-ProfileCard-main">
        <img className="AsideNavbarSuperAdmin-ProfileCard-MainPicture" src={Avatar} alt="" />
        <h2 className="AsideNavbarSuperAdmin-ProfileCard-Name">Stadium</h2>
        <h3 className="AsideNavbarSuperAdmin-ProfileCard-Title">Super-Admin</h3>
      </div>
      <Nav className="AsideNavbarSuperAdmin-Navbar-main">
        <NavMenu className="AsideNavbarSuperAdmin-Navbar-ul">
          <NavLink to="/backoffice/superadmin/associations" className="AsideNavbarSuperAdmin-Navbar-item"><span className="material-icons">home</span><span className="AsideNavbar-Navbar-category">home</span></NavLink>
          <NavLink className="AsideNavbarSuperAdmin-Navbar-item"><span className="material-icons">mark_email_unread</span><span className="AsideNavbar-Navbar-category"><Link to="/backoffice/superadmin/messages">messages</Link></span></NavLink>
          <NavLink to="/backoffice/superadmin/reglages" className="AsideNavbarSuperAdmin-Navbar-item"><span className="material-icons">settings</span><span className="AsideNavbar-Navbar-category">réglages</span></NavLink>
        </NavMenu>
      </Nav>
      <div className="AsideNavbarSuperAdmin-logout">
        <button type="button" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

// == Export
export default AsideNavbarSuperAdmin;
