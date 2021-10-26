import styled from 'styled-components';

export const Nav = styled.div`
margin-top: 100px;
`;

export const NavMenu = styled.div`
list-style-type: none;

`;

export const NavLink = styled.div`
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
`;
