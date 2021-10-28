import PropTypes from 'prop-types';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Stadium </NavLogo>
        <MobileIcon onClick={toggle}>
          <span className="material-icons">menu</span>
        </MobileIcon>
        <NavBtn to="/signin"><NavBtnLink to="/signin">Sign In</NavBtnLink></NavBtn>
      </NavbarContainer>
    </Nav>
  </>
);

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Navbar;
