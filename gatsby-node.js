exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: {
      projects: { nodes: projects }
    }
  } = await graphql(`
    query GetAllProjects {
      projects: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  projects.forEach(({ id, frontmatter: { slug } }, index) => {
    createPage({
      path: `projects/${slug}`,
      component: require.resolve(`./src/templates/project.ts`),
      context: {
        id,
        prev: index === 0 ? null : projects[index - 1].frontmatter,
        next: index === projects.length - 1 ? null : projects[index + 1].frontmatter
      }
    });
  });
};
