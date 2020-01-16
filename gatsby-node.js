// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = async promise => {
  const result = await promise;
  if (result.errors) {
    throw result.errors;
  }
  return result;
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve(`./src/templates/project.ts`);

  const result = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  );

  result.data.projects.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: projectTemplate,
      context: {
        slug: node.slug,
        images: `/${node.images}/`
      }
    });
  });
};
