import React from "react";
// @ts-ignore
import { MDXProvider } from "@mdx-js/react";
import { Layout } from "../Layout";
import { Section } from "../../Core";
import { markdownComponents } from "./elements";

export const Markdown: React.FC = props => <MDXProvider components={markdownComponents} {...props} />;

export const MarkdownLayout: React.FC<React.ComponentProps<typeof Layout>> = ({ children, ...props }) => (
  <Layout {...props}>
    <Section>
      <Markdown>{children}</Markdown>
    </Section>
  </Layout>
);
