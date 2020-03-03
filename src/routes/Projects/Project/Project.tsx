import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MarkdownLayout } from "../../../components";
import { GetProjectQuery, MdxFrontmatter } from "../../../../types/graphql-types";

interface ProjectProps {
  data: GetProjectQuery;
  pageContext: {
    prev?: Pick<MdxFrontmatter, "title" | "slug">;
    next?: Pick<MdxFrontmatter, "title" | "slug">;
  };
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
