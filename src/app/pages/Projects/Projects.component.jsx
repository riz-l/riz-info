// Import: Packages
import React from "react";
// import { useSelector } from "react-redux";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Import: Elements
import { Container, ProjectItems, Wrapper } from "./Projects.elements";

// Import: Components
import { PageTitle, ProjectItem } from "../../components";

// Page: Projects
export default function Projects() {
  // const isGlobalThemeDark = useSelector(
  //   (state) => state.globalTheme.isGlobalThemeDark
  // );

  return (
    <>
      <Container>
        <Wrapper>
          <PageTitle heading="Projects" subheading="Welcome to my Projects" />

          {/* <SkeletonTheme
            color={isGlobalThemeDark ? "#f2f2f2" : "#444448"}
            highlightColor={isGlobalThemeDark ? "#ffffff" : "#505058"}
          >
            <Skeleton height={280} count={1} />
          </SkeletonTheme> */}

          <ProjectItems>
            <ProjectItem
              client="NHS"
              date="2021/05/16"
              description="Wow look"
              imageAlt="Big image"
              imageSrc="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              slug="one-ed"
              title="OneED"
              type="Test"
            />
          </ProjectItems>
        </Wrapper>
      </Container>
    </>
  );
}
