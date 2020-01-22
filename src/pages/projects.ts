import { graphql } from "gatsby";
import { Projects } from "../routes/Projects";

export default Projects;

export const query = graphql`
  query Projects {
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          banner {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          title
          client
        }
      }
    }
  }
`;
