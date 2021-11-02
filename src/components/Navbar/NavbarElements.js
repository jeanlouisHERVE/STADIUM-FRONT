import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: #074666;
  height: 80px; 
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 1300px) {
    transition : 0,8 all ease;
  }

  @media screen and (min-width: 1301px) {
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  display : flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  maw-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  display:flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  margin-left:24px;
  font-weight: bold; 
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavBtn = styled.nav`
  display:flex;
  align-items: center;

  @media screen and (max-width : 1300px){
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out; 
    background: #fff;
    color: #010606;

  }
`;
