// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import {
  Container,
  Description,
  Image,
  ImageContainer,
  InformationContainer,
  ProjectHeading,
  ProjectLead,
  Row,
  RowItem,
} from "./ProjectItem.elements";

// Component: ProjectItem
export default function ProjectItem({
  client,
  date,
  description,
  imageAlt,
  imageSrc,
  slug,
  title,
  type,
}) {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={imageSrc} alt={imageAlt} />
        </ImageContainer>

        <InformationContainer>
          <ProjectLead>
            <Link to={"/projects/" + slug}>
              <ProjectHeading>{title}</ProjectHeading>
            </Link>
          </ProjectLead>

          <Description>
            <p>{description}</p>
          </Description>

          <Row>
            <RowItem>
              <strong>Finished on:</strong>{" "}
              {new Date(date).toLocaleDateString()}
            </RowItem>

            <RowItem>
              <strong>Client:</strong> {client}
            </RowItem>

            <RowItem style={{ textTransform: "capitalize" }}>
              <strong>Type:</strong> {type}
            </RowItem>
          </Row>
        </InformationContainer>
      </Container>
    </>
  );
}
