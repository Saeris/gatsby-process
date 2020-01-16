import { graphql } from "gatsby";
import { Instagram } from "../routes/Instagram";

export default Instagram;

export const query = graphql`
  query Instagram {
    instagram: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 30) {
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
`;
