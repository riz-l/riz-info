// Import: Packages
import styled, { keyframes } from "styled-components/macro";

// Animation: blinkOpacity
const blinkOpacity = keyframes`
  50% {
    opacity: 0;
  }
`;

// Element: Blink
export const Blink = styled.span`
  animation: ${blinkOpacity} 1s linear infinite;
  opacity: 0;
  transition: all 100ms linear;
  visibility: hidden;
`;

// Element: Container
export const Container = styled.article`
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: 360px;
  max-height: 360px;
  min-height: 360px;
  justify-content: center;
  margin-bottom: 2rem;
  overflow: hidden;
  position: relative;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;
`;

// Element: Background
export const Background = styled.div`
  align-items: center;
  background: url(${({ imageSrc }) => imageSrc && imageSrc});
  background-attachment: fixed;
  background-color: #19181f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  bottom: 0;
  display: flex;
  filter: blur(80px);
  -webkit-filter: blur(80px);
  -moz-filter: blur(80px);
  -o-filter: blur(80px);
  -ms-filter: blur(80px);
  height: 360px;
  max-height: 360px;
  min-height: 360px;
  justify-content: center;
  left: 0;
  margin: -5px -10px -10px -5px;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;
`;

// Element: DetailsContainer
export const DetailsContainer = styled.div`
  align-items: center;
  border-radius: 8px;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Details
export const Details = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border-radius: 8px;
  display: flex;
  height: 80%;
  justify-content: center;
  position: absolute;
  transition: all 100ms linear;
  width: 95%;
`;

// Element: Image
export const Image = styled.img`
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  flex: 450px;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 100ms linear;
  width: 450px;
  max-width: 450px;
  min-width: 450px;
  z-index: 2;
`;

// Element: Title
export const Title = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  & h2 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    cursor: pointer;
    font-family: "PoppinsMedium", sans-serif;
    font-size: 2rem;
    transition: all 100ms linear;
  }
`;

// Element: Tags
export const Tags = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
  margin-top: auto;
`;

// Element: Tag
export const Tag = styled.span`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundSecondary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.textPrimary};
  display: flex;
  justify-content: center;
  margin-right: 0.8rem;
  padding: 0.4rem 0.8rem;

  &:last-of-type {
    margin-right: 0;
  }

  & span {
    font-family: "PoppinsMedium", sans-serif;
    margin-right: 0.4rem;
  }
`;

// Element: Content
export const Content = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border-bottom-right-radius: 8px;
  border-right: 12px solid
    ${(props) => props.theme.colors.global.backgroundPrimary};
  border-top-right-radius: 8px;
  cursor: pointer;
  display: flex;
  flex: auto;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  min-height: 100%;
  justify-content: flex-start;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 100ms linear;
  width: 100%;
  max-width: calc(100% - 450px);
  min-width: calc(100% - 450px);
  z-index: 2;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.global.backgroundSecondary};
    border-right: 12px solid
      ${(props) => props.theme.colors.global.highlightSecondary};
    transition: all 100ms linear;

    & ${Title} {
      & h2 {
        color: #ff7570;
        transition: all 100ms linear;

        & ${Blink} {
          opacity: 1;
          transition: all 100ms linear;
          visibility: visible;
        }
      }
    }

    & p {
      color: ${(props) => props.theme.colors.global.textSecondary};
      transition: all 100ms linear;
    }

    & ${Tag} {
      background-color: ${(props) =>
        props.theme.colors.global.backgroundPrimary};
      color: ${(props) => props.theme.colors.global.textSecondary};
      transition: all 100ms linear;
    }
  }

  & p {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-family: "PoppinsRegular", sans-serif;
    font-size: 1.1rem;
    margin-top: 0.4rem;
    transition: all 100ms linear;
  }
`;
