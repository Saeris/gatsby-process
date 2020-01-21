import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "./elements";

const query = graphql`
  query Footer {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

interface QueryResult {
  site: {
    siteMetadata: {
      author: string;
    };
  };
}

export const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { author }
    }
  }: QueryResult = useStaticQuery(query);

  return (
    <Container>
      <p>{`Copyright © ${new Date().getFullYear()} ${author}`}</p>
    </Container>
  );
};
