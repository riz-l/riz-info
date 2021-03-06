// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: auto;
  min-height: calc(100vh - 104px);
  overflow-x: hidden;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem;
  width: 92%;
  max-width: 1400px;
`;

// Element: ProjectItems
export const ProjectItems = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin: 0 auto;
  transition: all 100ms linear;
  width: 100%;
`;
