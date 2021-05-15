// Import: Packages
import styled from "styled-components/macro";
import { deviceWidth } from "../../../definitions/breakPoints";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

// Element: Container
export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  height: 80px;
  max-height: 80px;
  min-height: 80px;
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

  @media ${deviceWidth.tablet} {
    transition: all 100ms linear;
    width: 94%;
  }
`;

// Element: LogoContainer
export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: Logo
export const Logo = styled.span`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsBold", sans-serif;
  font-size: 3rem;
  text-transform: lowercase;
  transition: all 100ms linear;
`;

// Element: NavContainer
export const NavContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Nav
export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  width: 100%;

  @media ${deviceWidth.tablet} {
    opacity: 0;
    visibility: hidden;
  }
`;

// Element: NavItem
export const NavItem = styled(NavLink).attrs({ activeClassName })`
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.global.textPrimary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.global.textSecondary};
  cursor: pointer;
  display: flex;
  font-family: "PoppinsRegular", sans-serif;
  font-size: 1.2rem;
  height: auto;
  justify-content: center;
  margin: 0 8px;
  padding: 0.6rem 1rem;
  position: relative;
  transition: all 100ms linear;

  &:last-of-type {
    margin: 0 0 0 8px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    border: 1px solid ${(props) => props.theme.colors.global.highlightSecondary};
    transition: all 100ms linear;
  }
`;
