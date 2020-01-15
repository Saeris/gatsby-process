import React from "react"
import Img from "gatsby-image"
import { config, useSpring, animated } from "react-spring"
import { Layout, SEO } from "../../../components"
import { PBox, Content, Category, Description, PButton } from "./elements"

interface ProjectProps {
  data: {
    project: {
      title_detail: string
      color: string
      category: string
      desc: string
      slug: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
}

export const Project: React.FC<ProjectProps> = ({
  data: { project, images }
}) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: "translate3d(0, -30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" }
  })

  const titleAnimation = useSpring({
    config: config.slow,
    delay: 300,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  const descAnimation = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  const imagesAnimation = useSpring({
    config: config.slow,
    delay: 800,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <Layout color={project.color}>
      <SEO
        pathname={project.slug}
        title={`${project.title_detail} | Jodie`}
        desc={project.desc}
        node={project.parent}
        banner={project.cover.childImageSharp.resize.src}
        individual
      />
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{project.category}</Category>
        <animated.h1 style={titleAnimation}>{project.title_detail}</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        </Description>
      </PBox>
      <Content bg={project.color} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          {images.nodes.map(image => (
            <Img
              alt={image.name}
              key={image.childImageSharp.fluid.src}
              fluid={image.childImageSharp.fluid}
            />
          ))}
        </PBox>
      </Content>
      <PBox style={{ textAlign: "center" }} py={10} px={[6, 6, 8, 10]}>
        <h2>Want to start your own project?</h2>
        <PButton color={project.color} py={4} px={8}>
          Contact Us
        </PButton>
      </PBox>
    </Layout>
  )
}
