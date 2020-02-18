import React from "react";
import { Container, Overlay, Preview, Title, Client } from "./elements";
import { ProjectsQuery } from "../../../../types/graphql-types";

type CardProps = Partial<ProjectsQuery["projects"]["nodes"][0]["frontmatter"]>;

export const Card: React.FC<CardProps> = ({ slug = ``, banner = {}, title = ``, client = `` }) => (
  <Container>
    <Preview fluid={banner?.childImageSharp?.fluid} />
    <Overlay to={`/projects/${slug}`}>
      <Title>{title}</Title>
      <Client>{client}</Client>
    </Overlay>
  </Container>
);
