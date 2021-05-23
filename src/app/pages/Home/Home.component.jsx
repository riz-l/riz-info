// Import: Packages
import React from "react";

// Import: Assets
import cv from "../../../assets/pdfs/cv.pdf";

// Import: Elements
import { Container, Cta, CtaText, Heading, Wrapper } from "./Home.elements";

// Page: Home
export default function Home() {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Hi there. I'm Riz.</Heading>

          <Cta>
            <a href={cv} target="blank">
              <CtaText>Download CV</CtaText>
            </a>
          </Cta>
        </Wrapper>
      </Container>
    </>
  );
}
