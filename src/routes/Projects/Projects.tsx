import React from "react";
import { Layout, Section, CardList, Card } from "../../components";
import { ChildImageSharp } from "../../types";

interface Project {
  id: string;
  frontmatter: {
    slug: string;
    banner: ChildImageSharp;
    title: string;
    client: string;
  };
}

interface ProjectsProps {
  data: {
    projects: {
      nodes: Project[];
    };
  };
}

export const Projects: React.FC<ProjectsProps> = ({ data: { projects } }) => (
  <Layout>
    <Section>
      <CardList>
        {projects?.nodes?.map(({ id, frontmatter }) => (
          <Card key={id} {...frontmatter} />
        ))}
      </CardList>
    </Section>
  </Layout>
);
