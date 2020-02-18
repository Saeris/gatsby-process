import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MarkdownLayout } from "../../../components";
import { GetProjectQuery } from "../../../../types/graphql-types";

interface ProjectProps {
  data: GetProjectQuery;
}

export const Project: React.FC<ProjectProps> = ({ data: { project } }) =>
  project ? (
    <MarkdownLayout
      seo={{
        title: project?.frontmatter?.title
      }}
    >
      <MDXRenderer>{project.body}</MDXRenderer>
    </MarkdownLayout>
  ) : null;
