import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MarkdownLayout, PageNavContext } from "../../components";
import { GetProjectQuery } from "../../../types/graphql-types";

interface ProjectProps {
  data: GetProjectQuery;
  pageContext: PageNavContext;
}

export const Project: React.FC<ProjectProps> = ({ data: { project }, pageContext }) =>
  project ? (
    <MarkdownLayout
      pages={pageContext}
      seo={{
        title: project?.frontmatter?.title
      }}
    >
      <MDXRenderer>{project.body}</MDXRenderer>
    </MarkdownLayout>
  ) : null;
