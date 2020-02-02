exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const getAllProjects = await graphql(`
    query GetAllProjects {
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

  getAllProjects.data.projects.nodes.forEach(({ id, frontmatter: { slug } }) => {
    createPage({
      path: `projects/${slug}`,
      component: require.resolve(`./src/templates/project.ts`),
      context: {
        id
      }
    });
  });
};
