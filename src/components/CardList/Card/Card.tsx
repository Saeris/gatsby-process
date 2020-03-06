import React from "react";
import { ProjectsQuery, MdxFrontmatter } from "../../../../types/graphql-types";
import { Container, Preview, Title, Client } from "./elements";

type CardProps = Partial<ProjectsQuery["projects"]["nodes"][0]["frontmatter"]>;

export const Card: React.FC<CardProps> = ({ slug = ``, banner = {}, title = ``, client = `` }) => (
  <Container>
    <Preview to={`/projects/${slug}`} img={banner as MdxFrontmatter["banner"]} alt={`Navigate to Project ${title}`}>
      <Title>{title}</Title>
      <Client>{client}</Client>
    </Preview>
  </Container>
);
