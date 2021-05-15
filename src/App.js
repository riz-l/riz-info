// Import: Packages
import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setIsGlobalDarkTheme } from "./redux/slices/selectedThemeSlice";

// Import: Themes
import { darkTheme } from "./app/themes/darkTheme";
import { lightTheme } from "./app/themes/lightTheme";

// Component: App
export default function App() {
  // Redux: isGlobalDarkTheme
  const isGlobalDarkTheme = useSelector(
    (state) => state.selectedTheme.isGlobalDarkTheme
  );
  const dispatch = useDispatch();

  // Effect: Sets user preference for lightTheme/darkTheme
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isGlobalDarkTheme));
  }, [isGlobalDarkTheme]);

  // Determines global theme to be lightTheme || darkTheme
  function setTheme() {
    if (isGlobalDarkTheme) {
      dispatch(setIsGlobalDarkTheme(false));
    } else {
      dispatch(setIsGlobalDarkTheme(true));
    }
  }

  return (
    <ThemeProvider theme={isGlobalDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Heading>Riz Layton</Heading>

        <button type="button" onClick={() => setTheme()}>
          Change theme
        </button>
      </Container>
    </ThemeProvider>
  );
}

// Element: Container
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  min-height: 100vh;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100vw;
`;

// Element: Heading
const Heading = styled.h1`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsThin";
  font-size: 4rem;
  transition: all 100ms linear;
`;
