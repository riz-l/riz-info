// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: calc(100vh - 104px);
  min-height: calc(100vh - 104px);
  transition: all 100ms linear;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 92%;
`;

// Element: ProjectItems
export const ProjectItems = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  transition: all 100ms linear;
  width: 100%;
`;
