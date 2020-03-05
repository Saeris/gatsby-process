import React from "react";
import { Container, Overlay, Image } from "./elements";
import { MdxFrontmatter } from "../../../types/graphql-types";

interface PreviewProps {
  img: MdxFrontmatter["banner"];
  alt?: string;
}

export const Preview: React.FC<PreviewProps> = ({ img = {}, alt, children, ...props }) => (
  <Container {...props}>
    <Image fluid={img?.childImageSharp?.fluid} alt={alt} />
    <Overlay>{children}</Overlay>
  </Container>
);
