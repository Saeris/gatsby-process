import React from "react";
import { Container, Overlay, Preview, Title, Client } from "./elements";
import { ChildImageSharp } from "../../../types";

interface CardProps {
  slug: string;
  banner: ChildImageSharp;
  title: string;
  client: string;
}

export const Card: React.FC<CardProps> = ({ slug, banner, title, client }) => (
  <Container>
    <Preview fluid={banner.childImageSharp.fluid} />
    <Overlay to={`/projects/${slug}`}>
      <Title>{title}</Title>
      <Client>{client}</Client>
    </Overlay>
  </Container>
);
