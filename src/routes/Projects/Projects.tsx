import React from "react"
import Img from "gatsby-image"
import { config, useSpring } from "react-spring"
import { Layout, GridItem, SEO } from "../../components"
import { ChildImageSharp } from "../../types"
import { Area } from "./elements"

interface ProjectsProps {
  data: {
    projects: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
  }
}

export const Projects: React.FC<ProjectsProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <Layout color="#000">
      <SEO title="Projects | Jodie" />
      <Area style={pageAnimation}>
        {projects.nodes.map(project => (
          <GridItem
            key={project.slug}
            to={project.slug}
            aria-label={`View project "${project.title}"`}
          >
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}
