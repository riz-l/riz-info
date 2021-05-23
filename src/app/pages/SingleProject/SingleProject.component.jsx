// Import: Packages
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleProject } from "../../../redux/slices/sanitySingleProjectSlice";
import BlockContent from "@sanity/block-content-to-react";

import { sanityImageUrl } from "../../../utils/sanityImageUrl";

// Import: Icons
import { IoIosArrowBack as BackIcon } from "react-icons/io";

// Import: Elements
import {
  Blink,
  Container,
  Content,
  Header,
  HeaderImage,
  Heading,
  Prose,
  ReturnButton,
  Wrapper,
} from "./SingleProject.elements";

// Page: SingleProject
export default function SingleProject() {
  // Redux: Extracts from the global state
  const singlePost = useSelector((state) => state.sanitySingleProject.project);
  const dispatch = useDispatch();

  // Params: slug
  const { slug } = useParams();

  // Effect: Fetches singlePost from Sanity.io
  useEffect(() => {
    dispatch(getSingleProject(slug));
  }, [dispatch, slug]);

  // If there is no singlePost, return loading message
  if (!singlePost || singlePost.length < 0) {
    return (
      <>
        <div>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Content>
            <ReturnButton>
              <Link to="/projects">
                <span>
                  <BackIcon />
                  Back<Blink>_</Blink>
                </span>
              </Link>
            </ReturnButton>

            <Header>
              <Heading>{singlePost.title}</Heading>
              <HeaderImage
                src={sanityImageUrl(singlePost.mainImage).url()}
                alt={singlePost.mainImageAlt}
              />
            </Header>

            <Prose>
              {singlePost.body !== undefined ? (
                <BlockContent
                  blocks={singlePost.body}
                  projectId="cqtmy0ey"
                  dataset="production"
                />
              ) : null}
            </Prose>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
}
