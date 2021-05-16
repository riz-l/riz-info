// Import: Packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsGlobalThemeDark } from "../../../redux/slices/globalThemeSlice";
import { setIsNavigationOpen } from "../../../redux/slices/navigationSlice";

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

// Import: Components
import { ThemeToggle } from "../index";

// Component: Header
export default function Header() {
  // Redux: isGlobalThemeDark
  const isGlobalThemeDark = useSelector(
    (state) => state.globalTheme.isGlobalThemeDark
  );
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Wrapper>
          <LogoContainer>
            <Logo>Riz</Logo>
          </LogoContainer>

          <ThemeToggle
            isOn={isGlobalThemeDark}
            handleToggle={() => dispatch(setIsGlobalThemeDark())}
            onColor="#f5f4f4"
          />

          <NavContainer>
            <Nav>
              <NavItem to="/" exact>
                Home
              </NavItem>

              <NavItem to="/projects">Projects</NavItem>

              <NavItem to="/blog">Blog</NavItem>

              <NavItem to="/about">About</NavItem>

              <NavItem to="/contact">Contact</NavItem>
            </Nav>

            <MenuIconContainer onClick={() => dispatch(setIsNavigationOpen())}>
              <MenuIcon />
            </MenuIconContainer>
          </NavContainer>
        </Wrapper>
      </Container>
    </>
  );
}
