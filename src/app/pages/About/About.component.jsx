// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./About.elements";

// Import: Components
import { PageTitle } from "../../components";

// Page: About
export default function About() {
  return (
    <>
      <Container>
        <Wrapper>
          <PageTitle heading="About" subheading="Find out more about me" />
        </Wrapper>
      </Container>
    </>
  );
}
