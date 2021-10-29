import PropTypes from 'prop-types';
import {
  SidebarContainer,
  Icon,
  SideBtnWrap,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <span style={{ color: 'white' }} className="material-icons">close</span>
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to="about" onClick={toggle}>
          Home
        </SidebarLink>
        <SidebarLink to="discover" onClick={toggle}>
          Planning
        </SidebarLink>
        <SidebarLink to="services" onClick={toggle}>
          Cours
        </SidebarLink>
        <SidebarLink to="signup" onClick={toggle}>
          Evenements
        </SidebarLink>
        <SidebarLink to="signup" onClick={toggle}>
          Messages
        </SidebarLink>
        <SidebarLink to="signup" onClick={toggle}>
          Réglages
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="signin">Deconnexion</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
);

Sidebar.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
