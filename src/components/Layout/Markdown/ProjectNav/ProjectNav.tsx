import React from "react";
import { AspectScale } from "../../../Core";
import { PageNavContext } from "../types";
import { Container, Preview, NavLabel, Prev, Next, Title } from "./elements";

interface ProjectNavProps {
  pages?: PageNavContext;
}

export const ProjectNav: React.FC<ProjectNavProps> = ({ pages }) => {
  if (pages) {
    const { prev, next } = pages;
    return (
      <Container>
        {prev ? (
          <Prev to={`/projects/${prev.slug}`}>
            <AspectScale ratio="2:1">
              <Preview img={prev.banner}>
                <Title>{prev.title}</Title>
              </Preview>
            </AspectScale>
            <NavLabel>Previous Project</NavLabel>
          </Prev>
        ) : null}
        {next ? (
          <Next to={`/projects/${next.slug}`}>
            <AspectScale ratio="2:1">
              <Preview img={next.banner}>
                <Title>{next.title}</Title>
              </Preview>
            </AspectScale>
            <NavLabel>Next Project</NavLabel>
          </Next>
        ) : null}
      </Container>
    );
  }
  return null;
};
