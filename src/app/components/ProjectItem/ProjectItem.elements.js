// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.article`
  align-items: center;
  display: flex;
  height: 315px;
  max-height: 315px;
  min-height: 315px;
  justify-content: center;
  padding: 0 0 0 1rem;
  width: 100%;
  max-width: 1400px;
`;

// Element: ImageContainer
export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Image
export const Image = styled.img`
  border-bottom-left-radius: 8px;
  border-left: 8px solid
    ${(props) => props.theme.colors.global.highlightSecondary};
  border-top-left-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: InformationContainer
export const InformationContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.global.textPrimary};
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex: 2;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`;

// Element: ProjectLead
export const ProjectLead = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Element: ProjectHeading
export const ProjectHeading = styled.h3`
  color: ${(props) => props.theme.colors.global.backgroundPrimary};
  cursor: pointer;
  font-family: "PoppinsMedium", sans-serif;
  font-size: 2.8rem;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
    transition: all 100ms linear;
  }
`;

// Element: Description
export const Description = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  & p {
    color: ${(props) => props.theme.colors.global.backgroundSecondary};
    font-size: 1.2rem;
    line-height: 1.75;
  }
`;

// Element: Row
export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

// Element: RowItem
export const RowItem = styled.div`
  background-color: ${(props) => props.theme.colors.global.textPrimary};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.global.backgroundPrimary};
  margin: 0 1rem 1rem 0;
  padding: 0.8rem 1.6rem;
`;
