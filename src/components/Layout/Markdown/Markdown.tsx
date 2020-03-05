import React from "react";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "../Layout";
import { Section } from "../../Core";
import { ProjectNav } from "./ProjectNav";
import { markdownComponents } from "./elements";
import { PageNavContext } from "./types";

export const Markdown: React.FC = props => <MDXProvider components={markdownComponents} {...props} />;

interface MarkdownLayoutProps extends React.ComponentProps<typeof Layout> {
  pages: PageNavContext;
}

export const MarkdownLayout: React.FC<MarkdownLayoutProps> = ({ children, pages, ...props }) => (
  <Layout {...props}>
    <Section>
      <Markdown>{children}</Markdown>
      <ProjectNav pages={pages} />
    </Section>
  </Layout>
);
