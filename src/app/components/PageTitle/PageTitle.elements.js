// Import: Packages
import styled from "styled-components";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  width: 92%;
  max-width: 1400px;
`;

// Element: Heading
export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsSemiBold", sans-serif;
  font-size: 3.4rem;
  transition: all 100ms linear;
`;

// Element: Subheading
export const Subheading = styled.span`
  color: ${(props) => props.theme.colors.global.textPrimary};
  font-family: "PoppinsRegular", sans-serif;
  font-size: 1.6rem;
  transition: all 100ms linear;
`;
