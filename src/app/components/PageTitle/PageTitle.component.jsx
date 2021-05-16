// Import: Packages
import React from "react";

// Import: Elements
import { Container, Heading, Subheading } from "./PageTitle.elements";

// Component: PageTitle
export default function PageTitle({ heading, subheading }) {
  return (
    <>
      <Container>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </Container>
    </>
  );
}
