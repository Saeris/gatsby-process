import { graphql } from "gatsby";
import { Projects } from "../routes/Projects";

export default Projects;

export const pageQuery = graphql`
  query Index {
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
