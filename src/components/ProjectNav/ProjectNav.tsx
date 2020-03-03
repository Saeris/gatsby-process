import React from "react";
import { MdxFrontmatter } from "../../../types/graphql-types";
import { Container, NavLabel, Prev, Next } from "./elements";

interface ProjectNavProps {
  pages?: {
    prev?: Pick<MdxFrontmatter, "title" | "slug">;
    next?: Pick<MdxFrontmatter, "title" | "slug">;
  };
}

export const ProjectNav: React.FC<ProjectNavProps> = ({ pages }) => (
  <Container>
    {pages?.prev ? (
      <Prev to={`/projects/${pages.prev.slug}`}>
        <NavLabel>Previous Project</NavLabel>
        {pages.prev.title}
      </Prev>
    ) : null}
    {pages?.next ? (
      <Next to={`/projects/${pages.next.slug}`}>
        <NavLabel>Next Project</NavLabel>
        {pages.next.title}
      </Next>
    ) : null}
  </Container>
);
