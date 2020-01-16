import { graphql } from "gatsby";
import { Projects } from "../routes/Projects";

export default Projects;

export const query = graphql`
  query Projects {
    projects: allProjectsYaml {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
