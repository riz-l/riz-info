// Import: Packages
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Contact.elements";

// Import: Components
import { PageTitle } from "../../components";

// Page: Contact
export default function Contact() {
  return (
    <>
      <Container>
        <Wrapper>
          <PageTitle heading="Contact" subheading="Get in touch" />
        </Wrapper>
      </Container>
    </>
  );
}
