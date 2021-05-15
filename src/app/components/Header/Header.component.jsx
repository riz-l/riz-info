// Import: Packages
import React from "react";

// Import: Assets
import { BiMenuAltRight as MenuIcon } from "react-icons/bi";

// Import: Elements
import {
  Container,
  Logo,
  LogoContainer,
  MenuIconContainer,
  Nav,
  NavContainer,
  NavItem,
  Wrapper,
} from "./Header.elements";

// Component: Header
export default function Header() {
  return (
    <>
      <Container data-testid={"header"}>
        <Wrapper>
          <LogoContainer>
            <Logo>Riz</Logo>
          </LogoContainer>

          <NavContainer>
            <Nav>
              <NavItem to="/g">Home</NavItem>
              <NavItem to="/g">Projects</NavItem>
              <NavItem to="/g">Blog</NavItem>
              <NavItem to="/g">About</NavItem>
              <NavItem to="/g">Contact</NavItem>
            </Nav>

            <MenuIconContainer>
              <MenuIcon />
            </MenuIconContainer>
          </NavContainer>
        </Wrapper>
      </Container>
    </>
  );
}
