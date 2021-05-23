// Import: Packages
import React from "react";
import { Link } from "react-router-dom";

// Import: Utils
import { capitalizeFirstLetter } from "../../../utils/capitalize";

// Import: Elements
import {
  Background,
  Blink,
  Container,
  Content,
  Details,
  DetailsContainer,
  Image,
  Tag,
  Tags,
  Title,
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
        <Background imageSrc={imageSrc && imageSrc} />

        <DetailsContainer>
          <Details>
            <Image alt={imageAlt && imageAlt} src={imageSrc && imageSrc} />

            <Content>
              <Link to={"/projects/" + slug}>
                <Title>
                  <h2>
                    {title && title}
                    <Blink>_</Blink>
                  </h2>
                </Title>

                <p>
                  {description && description.length > 120
                    ? description.substring(0, 120) + "..."
                    : description && description.length < 120
                    ? description
                    : "Sorry! It doesn't look like a description has been specified yet."}
                </p>

                <Tags>
                  <Tag>
                    <span>Client:</span>
                    {client ? client : "N/A"}
                  </Tag>

                  <Tag>
                    <span>Date:</span>
                    {date ? date : "N/A"}
                  </Tag>

                  <Tag>
                    <span>Type:</span>
                    {type ? capitalizeFirstLetter(type) : "N/A"}
                  </Tag>
                </Tags>
              </Link>
            </Content>
          </Details>
        </DetailsContainer>
      </Container>
    </>
  );
}
