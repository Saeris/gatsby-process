import React from "react";
import { Layout, Section, CardList, Card } from "../../components";
import { ProjectsQuery } from "../../../types/graphql-types";

interface ProjectsProps {
  data: ProjectsQuery;
}

export const Projects: React.FC<ProjectsProps> = ({ data: { projects } }) => (
  <Layout>
    <Section>
      <CardList>
        {projects.nodes.map(({ id, frontmatter }) => (
          <Card key={id} {...frontmatter} />
        ))}
      </CardList>
    </Section>
  </Layout>
);
