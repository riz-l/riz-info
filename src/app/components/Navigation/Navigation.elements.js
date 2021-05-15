// Import: Packages
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

// Element: Container
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.global.textPrimary};
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ isNavigationOpen }) =>
    isNavigationOpen ? `translateX(0)` : `translateX(100%)`};
  visibility: ${({ isNavigationOpen }) =>
    isNavigationOpen ? `visible` : `hidden`};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 2;
`;

// Element: Header
export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.global.textPrimary};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
  height: 104px;
  max-height: 104px;
  min-height: 104px;
  transition: all 100ms linear;
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  transition: all 100ms linear;
  width: 92%;
`;

// Element: LogoContainer
export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: auto;
`;

// Element: Logo
export const Logo = styled.span`
  align-items: center;
  color: ${(props) => props.theme.colors.global.backgroundSecondary};
  display: flex;
  font-family: "PoppinsBold", sans-serif;
  font-size: 3rem;
  height: 100%;
  justify-content: center;
  padding: 0.6rem 1rem;
  text-transform: lowercase;
`;

// Element: MenuIconContainer
export const MenuIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: center;
  margin: 0 0 0 8px;
  opacity: 1;
  padding: 0.6rem 1rem;
  transition: all 100ms linear;
  visibility: visible;

  & svg {
    fill: ${(props) => props.theme.colors.global.backgroundSecondary};
    height: 54px;
    transition: all 100ms linear;
    width: auto;
  }

  &:hover {
    & svg {
      fill: ${(props) => props.theme.colors.global.highlightSecondary};
      transition: all 100ms linear;
    }
  }
`;

// Element: NavContainer
export const NavContainer = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 104px);
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 2.8rem;
  transition: all 100ms linear;
  width: 92%;
`;

// Element: NavItem
export const NavItem = styled(NavLink).attrs({ activeClassName })`
  align-items: center;
  color: ${(props) => props.theme.colors.global.backgroundPrimary};
  cursor: pointer;
  display: flex;
  font-family: "PoppinsMedium", sans-serif;
  font-size: 2rem;
  height: auto;
  justify-content: center;
  margin: 1rem 8px;
  padding: 0.6rem 1rem;
  position: relative;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightSecondary};
    transition: all 100ms linear;
  }
`;
