// Import: Packages
import styled from "styled-components/macro";
import { deviceWidth } from "../../../definitions/breakPoints";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

// Element: Container
export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
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
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  display: flex;
  font-family: "PoppinsBold", sans-serif;
  font-size: 3rem;
  height: 100%;
  justify-content: center;
  padding: 0.6rem 1rem;
  text-transform: lowercase;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightSecondary};
    transition: all 100ms linear;
  }
`;

// Element: NavContainer
export const NavContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
`;

// Element: Nav
export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 100%;

  @media ${deviceWidth.tabletL} {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`;

// Element: NavItem
export const NavItem = styled(NavLink).attrs({ activeClassName })`
  align-items: center;
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  display: flex;
  font-family: "PoppinsMedium", sans-serif;
  font-size: 1.2rem;
  height: auto;
  justify-content: center;
  margin: 0 8px;
  padding: 0.6rem 1rem;
  position: relative;
  transition: all 100ms linear;

  &:last-of-type {
    border: 2px solid ${(props) => props.theme.colors.global.textSecondary};
    border-radius: 8px;
    margin: 0 0 0 8px;
    transition: all 100ms linear;
  }

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightSecondary};
    transition: all 100ms linear;

    &:last-of-type {
      border: 2px solid ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 100ms linear;
    }
  }
`;

// Element: MenuIconContainer
export const MenuIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: none;
  height: auto;
  justify-content: center;
  margin: 0 0 0 8px;
  opacity: 0;
  padding: 0.6rem 1rem;
  transition: all 100ms linear;
  visibility: hidden;

  @media ${deviceWidth.tabletL} {
    display: flex;
    opacity: 1;
    transition: all 100ms linear;
    visibility: visible;
  }

  & svg {
    fill: ${(props) => props.theme.colors.global.textPrimary};
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
