import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, SiteInfo, Title, Headline, Navigation, Links, NavItem, NavLink } from "./elements";

const query = graphql`
  query Header {
    site {
      siteMetadata {
        title
        headline
        navLinks {
          children
          external
          to
        }
      }
    }
  }
`;

interface QueryResult {
  site: {
    siteMetadata: {
      title: string;
      headline: string;
      navLinks: {
        children: string;
        external: boolean;
        to: string;
      }[];
    };
  };
}

export const Header: React.FC = () => {
  const {
    site: {
      siteMetadata: { title, headline, navLinks }
    }
  }: QueryResult = useStaticQuery(query);

  return (
    <Container>
      <Navigation>
        <SiteInfo>
          <NavLink to="/">
            <Title>{title}</Title>
            <Headline>{headline}</Headline>
          </NavLink>
        </SiteInfo>
        <Links>
          {navLinks.map(link => (
            <NavItem key={link.to}>
              <NavLink {...link} />
            </NavItem>
          ))}
        </Links>
      </Navigation>
    </Container>
  );
};
