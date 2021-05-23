// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Blog.elements";

// Import: Components
import { PageTitle } from "../../components";

// Page: Blog
export default function Blog() {
  return (
    <>
      <Container>
        <Wrapper>
          <PageTitle heading="Blog" subheading="Welcome to my Blog" />
        </Wrapper>
      </Container>
    </>
  );
}
