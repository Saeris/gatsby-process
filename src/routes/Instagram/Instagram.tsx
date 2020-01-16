import React from "react";
import Img from "gatsby-image";
import { config, useSpring, useTrail } from "react-spring";
import { Layout, SEO } from "../../components";
import { ChildImageSharp } from "../../types";
import Heart from "../../heart.svg";
import { Grid, Overlay, Title, Bottom, Item, Content, HeartIcon } from "./elements";

interface InstagramProps {
  data: {
    instagram: {
      nodes: {
        caption?: string;
        id: string;
        timestamp: number;
        likes: number;
        localFile: ChildImageSharp;
      }[];
    };
  };
}

export const Instagram: React.FC<InstagramProps> = ({
  data: {
    instagram: { nodes: instagram }
  }
}) => {
  const pageAnimation = useSpring({
    config: config.default,
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  const trail = useTrail(instagram.length, {
    config: {
      mass: 1,
      tension: 210,
      friction: 23
    },
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <Layout color="#3F4F67">
      <SEO title="Instagram | Jodie" />
      <Grid style={pageAnimation}>
        {trail.map((style, index) => {
          // Grab everything before the first hashtag (because I write my captions like that)
          const post = instagram[index];
          const title = post.caption ? post.caption.split(`#`)[0] : ``;
          const date = new Date(post.timestamp * 1000).toLocaleDateString(`de-DE`);

          return (
            <Item style={style} href={`https://www.instagram.com/p/${post.id}/`} key={post.id}>
              <Overlay />
              <Img fluid={post.localFile.childImageSharp.fluid} />
              <Content flexDirection="column" flexWrap="nowrap" justifyContent="space-between">
                <Title>{title}</Title>
                <Bottom flexDirection="row" flexWrap="nowrap" justifyContent="space-between">
                  <span>
                    <HeartIcon src={Heart} /> {post.likes}
                  </span>
                  <span>{date}</span>
                </Bottom>
              </Content>
            </Item>
          );
        })}
      </Grid>
    </Layout>
  );
};
