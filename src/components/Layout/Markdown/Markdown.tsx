import React from "react";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "../Layout";
import { Section } from "../../Core";
import { ProjectNav } from "../../ProjectNav";
import { MdxFrontmatter } from "../../../../types/graphql-types";
import { markdownComponents } from "./elements";

export const Markdown: React.FC = props => <MDXProvider components={markdownComponents} {...props} />;

interface MarkdownLayoutProps extends React.ComponentProps<typeof Layout> {
  pages: {
    prev?: Pick<MdxFrontmatter, "title" | "slug">;
    next?: Pick<MdxFrontmatter, "title" | "slug">;
  };
}

export const MarkdownLayout: React.FC<MarkdownLayoutProps> = ({ children, pages, ...props }) => (
  <Layout {...props}>
    <Section>
      <Markdown>{children}</Markdown>
    </Section>
    <ProjectNav pages={pages} />
  </Layout>
);
