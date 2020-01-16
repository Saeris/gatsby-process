import React from "react";
import Img from "gatsby-image";
import { useSpring, config } from "react-spring";
import { Layout, GridItem, SEO } from "../../components";
import { ChildImageSharp } from "../../types";
import { Area, FirstProject, AboutUs, ThreeProjects, Instagram } from "./elements";

interface HomeProps {
  data: {
    firstProject: {
      title: string;
      slug: string;
      cover: ChildImageSharp;
    };
    threeProjects: {
      nodes: {
        title: string;
        slug: string;
        cover: ChildImageSharp;
      }[];
    };
    aboutUs: ChildImageSharp;
    instagram: ChildImageSharp;
  };
}

export const Home: React.FC<HomeProps> = ({ data: { firstProject, threeProjects, aboutUs, instagram } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout>
      <SEO />
      <Area style={pageAnimation}>
        <FirstProject to={firstProject.slug} aria-label={`View project "${firstProject.title}"`}>
          <Img fluid={firstProject.cover.childImageSharp.fluid} />
          <span>{firstProject.title}</span>
        </FirstProject>
        <AboutUs to="/about" aria-label="Visit my about page">
          <Img fluid={aboutUs.childImageSharp.fluid} />
          <span>About</span>
        </AboutUs>
        <ThreeProjects>
          {threeProjects.nodes.map(project => (
            <GridItem to={project.slug} key={project.slug} aria-label={`View project "${project.title}"`}>
              <Img fluid={project.cover.childImageSharp.fluid} />
              <span>{project.title}</span>
            </GridItem>
          ))}
        </ThreeProjects>
        <Instagram to="/instagram" aria-label="See my Instagram pictures">
          <Img fluid={instagram.childImageSharp.fluid} />
          <span>Instagram</span>
        </Instagram>
      </Area>
    </Layout>
  );
};
