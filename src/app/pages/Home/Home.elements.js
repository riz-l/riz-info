// Import: Packages
import styled from "styled-components/macro";
import { deviceWidth } from "../../../definitions/breakPoints";

// Element: Container
export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: calc(100vh - 104px);
  min-height: calc(100vh - 104px);
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  width: 92%;

  @media ${deviceWidth.tablet} {
    align-items: flex-start;
    transition: all 100ms linear;
  }
`;

// Element: Heading
export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsBold", sans-serif;
  font-size: 8rem;
  padding: 0.6rem 1rem;
  transition: all 100ms linear;

  @media ${deviceWidth.laptop} {
    font-size: 6rem;
    margin-bottom: 4rem;
    transition: all 100ms linear;
  }

  @media ${deviceWidth.tablet} {
    font-size: 4rem;
    transition: all 100ms linear;
  }
`;

// Element: CtaText
export const CtaText = styled.span`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-size: 2rem;
  transition: all 100ms linear;

  @media ${deviceWidth.laptop} {
    font-size: 1.8rem;
    transition: all 100ms linear;
  }
`;

// Element: Cta
export const Cta = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.colors.global.textPrimary};
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  padding: 1.4rem 2.4rem;
  transition: all 100ms linear;

  @media ${deviceWidth.laptop} {
    margin-top: 0;
    transition: all 100ms linear;
  }

  @media ${deviceWidth.tablet} {
    margin-left: 1rem;
    transition: all 100ms linear;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;

    & ${CtaText} {
      color: ${(props) => props.theme.colors.global.highlightPrimary};
      transition: all 100ms linear;
    }
  }
`;
