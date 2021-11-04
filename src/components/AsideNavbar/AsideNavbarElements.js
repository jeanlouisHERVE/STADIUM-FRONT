import styled from 'styled-components';

export const Nav = styled.div`
`;

export const NavMenu = styled.div`
list-style-type: none;

`;

export const NavLink = styled.div`
    
    @media (max-width: 1549px) {
      display: flex;
    flex-direction: row;
    align-content: center;
    width: 90%;
    color: #ECF5D2;
    text-transform: uppercase;
    background-color: #02A5A5;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-weight: 700;
    font-size: small;
    cursor: pointer;
    height:40px;

    &:hover {
        background-color: #D87444;
    }
  }

    @media (min-width: 1550px) {
      display: flex;
    flex-direction: row;
    align-content: center;
    width: 75%;
    color: #ECF5D2;
    text-transform: uppercase;
    background-color: #02A5A5;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-weight: 700;
    font-size: small;
    cursor: pointer;

    &:hover {
        background-color: #D87444;
  }
   

    }
`;
