import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { GridItem } from "../../components";

export const Area = styled(animated.div)(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 35vw 40vw 25vw;
    grid-template-areas:
      "first-project about-us about-us"
      "three-projects three-projects three-projects"
      "instagram instagram instagram";

    @media (max-width: ${theme.breakpoints[3]}) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 35vw 30vw 30vw 25vw;
      grid-template-areas:
        "first-project first-project about-us about-us"
        "three-projects three-projects three-projects three-projects"
        "three-projects three-projects three-projects three-projects"
        "instagram instagram instagram instagram";
    }

    @media (max-width: ${theme.breakpoints[1]}) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 38vw);
      grid-template-areas:
        "first-project about-us"
        "three-projects three-projects"
        "three-projects three-projects"
        "three-projects three-projects"
        "instagram instagram";
    }

    @media (max-width: ${theme.breakpoints[0]}) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 50vw);
      grid-template-areas:
        "first-project"
        "about-us"
        "three-projects"
        "three-projects"
        "three-projects"
        "instagram";
    }
  `
);

export const FirstProject = styled(GridItem)`
  grid-area: first-project;
`;

export const AboutUs = styled(GridItem)`
  grid-area: about-us;
`;

export const ThreeProjects = styled.div(
  ({ theme }) => css`
    grid-area: three-projects;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: ${theme.breakpoints[1]}) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }
  `
);

export const Instagram = styled(GridItem)`
  grid-area: instagram;
`;
