exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: {
      projects: { nodes: projects }
    }
  } = await graphql(`
    query GetAllProjects {
      projects: allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          frontmatter {
            slug
            title
            banner {
              childImageSharp {
                fluid(quality: 95, maxWidth: 1200) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
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
