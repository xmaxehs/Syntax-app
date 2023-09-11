import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
export const NavbarContainer = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7d7e8f;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3vh;
  z-index: 999;
  background: transparent;
  @media screen and (max-width: 767.98px) {
    margin-left: 25%;
    margin-right: 25%;
    width: 80%;
    font-size: 90%;
  }
`;
export const NavbarBg = styled.div`
  width: 380px;
  height: 40px;
  padding-left: 0%;
  padding-right: 0%;
  background: #1f1f1f;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  @media screen and (max-width: 767.98px) {
    width: 60%;
    height: 40px;
  }
  @media screen and (max-width: 479.98px) {
    width: 75%;
  }
`;
export const NavList = styled.ul`
  display: flex;
  background: transparent;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  margin: 11px;
`;
export const NavItem = styled.li`
  font-weight: bold;
  background: transparent;
  font-size: 80%;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #5e59f7;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 767.98px) {
    font-weight: bold;
    margin-top: 3px;
  }
`;
export const NavLinks = styled(LinkS)`
  background: transparent;
  cursor: pointer;
  &:active {
    color: #5e59f7;
    transition: 0.2s ease-in-out;
  }
`;

export const NavItemLinkR = styled(LinkR)`
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  font-size: 80%;
  color: #7d7e8f;
  &:hover {
    color: #5e59f7;
    transition: 0.2s ease-in-out;
  }
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;