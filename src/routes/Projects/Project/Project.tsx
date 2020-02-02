import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MarkdownLayout } from "../../../components";

interface ProjectProps {
  data: {
    project: {
      id: string;
      frontmatter: {
        slug: string;
        title: string;
      };
      body: string;
    };
  };
}

export const Project: React.FC<ProjectProps> = ({ data: { project } }) => (
  <MarkdownLayout
    seo={{
      title: project.frontmatter.title
    }}
  >
    <MDXRenderer>{project.body}</MDXRenderer>
  </MarkdownLayout>
);
