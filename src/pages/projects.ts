import { graphql } from "gatsby"

export { Projects as default } from "../routes/Projects"

export const pageQuery = graphql`
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
`
