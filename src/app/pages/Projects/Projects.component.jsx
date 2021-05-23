// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getProjects } from "../../../redux/slices/sanityProjectsSlice";

// Import: Elements
import { Container, ProjectItems, Wrapper } from "./Projects.elements";

// Import: Components
import { PageTitle, ProjectItem } from "../../components";

// Page: Projects
export default function Projects() {
  // Redux: Extracts from the global state
  const isGlobalThemeDark = useSelector(
    (state) => state.globalTheme.isGlobalThemeDark
  );
  const sanityProjects = useSelector((state) => state.sanityProjects);
  const dispatch = useDispatch();

  // Effect: Fetches projectData from Sanity.io
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Wrapper>
          <PageTitle heading="Projects" subheading="Welcome to my Projects" />

          {sanityProjects.status === "loading" ? (
            <SkeletonTheme
              color={isGlobalThemeDark ? "#505058" : "#ffffff"}
              highlightColor={isGlobalThemeDark ? "#444448" : "#f2f2f2"}
            >
              <Skeleton
                height={320}
                count={1}
                style={{ borderRadius: "8px", marginBottom: "2rem" }}
              />
            </SkeletonTheme>
          ) : (
            sanityProjects.projects &&
            sanityProjects.projects.length > 0 && (
              <ProjectItems>
                {sanityProjects.projects.map((project, index) => (
                  <React.Fragment key={project.slug.current}>
                    <ProjectItem
                      key={index}
                      client={project.client}
                      date={project.date}
                      description={project.description}
                      imageAlt={project.mainImage.alt}
                      imageSrc={project.mainImage.asset.url}
                      slug={project.slug.current}
                      title={project.title}
                      type={project.projectType}
                    />
                  </React.Fragment>
                ))}
              </ProjectItems>
            )
          )}
        </Wrapper>
      </Container>
    </>
  );
}
