import React from "react";
import { MdxFrontmatter } from "../../../../types/graphql-types";
import { Container, Preview, Title, Client } from "./elements";

type CardProps = Partial<Pick<MdxFrontmatter, "title" | "client" | "slug" | "banner">>;

export const Card: React.FC<CardProps> = ({ slug, banner, title = ``, client = `` }) => (
  <Container>
    <Preview to={`/projects/${slug}`} img={banner} alt={`Navigate to Project ${title}`}>
      <Title>{title}</Title>
      <Client>{client}</Client>
    </Preview>
  </Container>
);
