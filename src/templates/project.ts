import { graphql } from "gatsby";
import { Project } from "../routes/Projects/Project";

export default Project;

export const pageQuery = graphql`
  query GetProject($id: String!) {
    project: mdx(id: { eq: $id }) {
      id
      frontmatter {
        slug
        title
      }
      body
    }
  }
`;
