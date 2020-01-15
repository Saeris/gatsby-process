import { graphql } from "gatsby"

export { Instagram as default } from "../routes/Instagram"

export const pageQuery = graphql`
  query Instagram {
    instagram: allInstaNode(
      sort: { fields: timestamp, order: DESC }
      limit: 30
    ) {
      nodes {
        caption
        id
        timestamp
        likes
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
