exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const getProjects = await graphql(`
    query GetProjects {
      projects: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  getProjects.data.projects.nodes.forEach(({ id, frontmatter: { slug } }) => {
    createPage({
      path: `projects/${slug}`,
      component: require.resolve(`./src/templates/project.ts`),
      context: {
        id
      }
    });
  });
};
