// Import: Packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavigationOpen } from "../../../redux/slices/navigationSlice";

// Import: Assets
import { IoMdCloseCircleOutline as CloseIcon } from "react-icons/io";

// Import: Elements
import {
  Container,
  Header,
  Logo,
  LogoContainer,
  MenuIconContainer,
  NavContainer,
  NavItem,
  Wrapper,
} from "./Navigation.elements";

// Component: Navigation
export default function Navigation() {
  // Redux: isNavigationOpen
  const isNavigationOpen = useSelector(
    (state) => state.navigation.isNavigationOpen
  );
  const dispatch = useDispatch();

  return (
    <>
      <Container isNavigationOpen={isNavigationOpen}>
        <Header>
          <Wrapper>
            <LogoContainer>
              <Logo>Nav</Logo>
            </LogoContainer>

            <MenuIconContainer onClick={() => dispatch(setIsNavigationOpen())}>
              <CloseIcon />
            </MenuIconContainer>
          </Wrapper>
        </Header>

        <NavContainer>
          <NavItem to="/" exact onClick={() => dispatch(setIsNavigationOpen())}>
            Home
          </NavItem>

          <NavItem
            to="/projects"
            onClick={() => dispatch(setIsNavigationOpen())}
          >
            Projects
          </NavItem>

          <NavItem to="/blog" onClick={() => dispatch(setIsNavigationOpen())}>
            Blog
          </NavItem>

          <NavItem to="/about" onClick={() => dispatch(setIsNavigationOpen())}>
            About
          </NavItem>

          <NavItem
            to="/contact"
            onClick={() => dispatch(setIsNavigationOpen())}
          >
            Contact
          </NavItem>
        </NavContainer>
      </Container>
    </>
  );
}
