// Import: Packages
import React, { useEffect, useState } from "react";
import sanityClient from "../../../client";
import { useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Import: Elements
import { Container, ProjectItems, Wrapper } from "./Projects.elements";

// Import: Components
import { PageTitle, ProjectItem } from "../../components";

// Page: Projects
export default function Projects() {
  // State: isLoading, projectData
  const [isLoading, setIsLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);

  // Redux: Extracts from the global state
  const isGlobalThemeDark = useSelector(
    (state) => state.globalTheme.isGlobalThemeDark
  );

  // Effect: Fetches projectData from Sanity.io
  useEffect(() => {
    async function getSanityData() {
      setIsLoading(true);
      sanityClient
        .fetch(
          `*[_type == "project"]{
            title,
            slug,
            date,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            },
            client,
            description,
            projectType,
            link,
            tags
          }`
        )
        .then((data) => {
          setProjectData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          throw new Error(error);
        });
    }
    getSanityData();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <PageTitle heading="Projects" subheading="Welcome to my Projects" />

          {isLoading ? (
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
            projectData &&
            projectData.length > 0 && (
              <ProjectItems>
                {projectData.map((project, index) => (
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
