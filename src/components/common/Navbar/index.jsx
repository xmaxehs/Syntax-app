import React from "react";
import {
  NavItem,
  NavList,
  NavbarBg,
  NavbarContainer,
  Nav,
  NavLinks,
  NavItemLinkR,
} from "./navbarElements";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Nav>
        <NavbarBg>
          <NavList>
            <NavItem>
              <NavLinks smooth={true} duration={500} to="home">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={5}
                to="about"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={5}
                to="projects"
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={100}
                to="contact"
              >
                Contact
              </NavLinks>
            </NavItem>
            <NavItemLinkR to="blog">Blogs</NavItemLinkR>
            <NavItemLinkR to="signin">Sign In</NavItemLinkR>
          </NavList>
        </NavbarBg>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
