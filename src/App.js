// Import: Packages
import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { useSelector } from "react-redux";

// Import: Themes
import { darkTheme } from "./app/themes/darkTheme";
import { lightTheme } from "./app/themes/lightTheme";

// Import: Components
import { Header, Navigation } from "./app/components";

// Component: App
export default function App() {
  // Redux: isGlobalThemeDark
  const isGlobalThemeDark = useSelector(
    (state) => state.globalTheme.isGlobalThemeDark
  );

  // Effect: Sets user preference for lightTheme/darkTheme
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isGlobalThemeDark));
  }, [isGlobalThemeDark]);

  return (
    <ThemeProvider theme={isGlobalThemeDark ? darkTheme : lightTheme}>
      <Container>
        <Header />
        <Navigation />

        <Heading>Hello there. I'm Riz.</Heading>
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
  font-size: 8rem;
  position: relative;
  transition: all 100ms linear;
`;
