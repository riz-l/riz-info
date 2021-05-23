// Import: Packages
import styled, { keyframes } from "styled-components/macro";

// Animation: blinkOpacity
const blinkOpacity = keyframes`
  50% {
    opacity: 0;
  }
`;

// Animation: fade
const fade = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

// Element: Container
export const Container = styled.main`
  animation: ${fade} 0.5s ease-out;
  height: auto;
  min-height: calc(100vh - 200px);
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  animation: ${fade} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 2rem;
  width: 92%;
  max-width: 1400px;
`;

// Element: Heading
export const Heading = styled.h1`
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsBold", sans-serif;
  font-size: 4rem;
  padding: 1rem 2rem;
  position: absolute;
  z-index: 2;
`;

// Element: Content
export const Content = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 4rem;
  width: 100%;
`;

// Element: Blink
export const Blink = styled.span`
  animation: ${blinkOpacity} 1s linear infinite;
  opacity: 0;
  transition: all 100ms linear;
  visibility: hidden;
`;

// Element: ReturnButton
export const ReturnButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: auto;
  justify-content: center;
  margin-bottom: 2rem;
  margin-right: auto;

  &:hover {
    & span {
      color: ${(props) => props.theme.colors.global.highlightSecondary};
      transition: all 100ms linear;

      & ${Blink} {
        opacity: 1;
        transition: all 100ms linear;
        visibility: visible;
      }
    }
  }

  & span {
    align-items: center;
    color: ${(props) => props.theme.colors.global.textPrimary};
    display: flex;
    font-family: "PoppinsBold", sans-serif;
    font-size: 1.8rem;
    transition: all 100ms linear;

    & svg {
      margin-right: 4px;
    }
  }
`;

// Element: Header
export const Header = styled.header`
  align-items: center;
  display: flex;
  flex: auto;
  height: 350px;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
`;

// Element: HeaderImage
export const HeaderImage = styled.img`
  animation: ${fade} 1s ease-out;
  background-position: center;
  border-radius: 8px;
  max-height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

// Element: Prose
export const Prose = styled.div`
  color: ${(props) => props.theme.colors.global.textSecondary};
  font-size: 1rem;
  height: 100%;
  line-height: 1.75;
  width: 100%;

  & p {
    margin-bottom: 1.25em;
    margin-top: 1.25em;

    & a {
      color: ${(props) => props.theme.colors.global.highlightSecondary};
      transition: all 100ms linear;

      &:hover {
        color: ${(props) => props.theme.colors.global.highlightPrimary};
        transition: all 100ms linear;
      }
    }
  }

  & ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & ul {
    margin-bottom: 1.25em;
    margin-top: 1.25em;

    & li {
      padding-left: 1.75em;
      position: relative;

      &::before {
        background-color: ${(props) => props.theme.colors.global.textSecondary};
        border-radius: 50%;
        content: "";
        height: 0.375em;
        left: 0.25em;
        position: absolute;
        top: calc(0.875em - 0.1875em);
        width: 0.375em;
      }
    }
  }

  & li {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
  }

  & figure {
    margin-bottom: 2em;
    margin-top: 2em;

    & img {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  & img {
    border-radius: 8px;
    display: block;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    width: auto;
    max-width: 100%;
  }

  & blockquote {
    border-bottom-left-radius: 4px;
    border-left: 4px solid
      ${(props) => props.theme.colors.global.highlightPrimary};
    border-top-left-radius: 4px;
    color: ${(props) => props.theme.colors.global.textPrimamry};
    font-family: "PoppinsMedium", sans-serif;
    font-size: 1.2rem;
    margin-bottom: 1.6em;
    margin-top: 1.6em;
    padding-left: 1em;
  }
`;
