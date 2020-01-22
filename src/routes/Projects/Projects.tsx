import React from "react";
import Img from "gatsby-image";
import { config, useSpring } from "react-spring";
import { Layout, GridItem } from "../../components";
import { ChildImageSharp } from "../../types";
import { Area } from "./elements";

interface ProjectsProps {
  data: {
    projects: {
      nodes: {
        id: string;
        frontmatter: {
          slug: string;
          banner: ChildImageSharp;
          title: string;
          client: string;
        };
      }[];
    };
  };
}

export const Projects: React.FC<ProjectsProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout>
      <Area style={pageAnimation}>
        {projects.nodes.map(({ frontmatter: { slug, banner, title, client } }) => (
          <GridItem key={slug} to={`/projects/${slug}`} aria-label={`View project "${title}"`}>
            <Img fluid={banner.childImageSharp.fluid} />
            <span>{title}</span>
            <span>{client}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  );
};
