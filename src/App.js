// Import: Packages
import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

// Import: Themes
import { darkTheme } from "./app/themes/darkTheme";
import { lightTheme } from "./app/themes/lightTheme";

// Import: Components, Pages
import { Header, Navigation } from "./app/components";
import { Home } from "./app/pages";

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

        <Switch>
          <Route component={Home} path="/" exact />
        </Switch>
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
