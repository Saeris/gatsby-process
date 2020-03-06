const proxy = require(`http-proxy-middleware`);

require(`dotenv`).config({
  path: `.env`
});

const pathPrefix = `/`;

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl: `https://rtaylor.design${pathPrefix}`,
    pathPrefix,
    titleAlt: `Rachel Taylor - Graphic Designer & Illustrator`,
    description: `Personal graphic design and illustration portfolio of Rachel Taylor.`,
    logo: `/logos/logo.png`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    author: `Rachel Taylor`,
    twitter: ``,
    facebook: ``,
    title: `Rachel Taylor`,
    headline: `Graphic Designer & Illustrator`,
    navLinks: [
      {
        children: `Projects`,
        to: `/projects`
      },
      {
        children: `About`,
        to: `/about`
      },
      {
        children: `Contact`,
        to: `/contact`
      },
      {
        children: `LinkedIn`,
        to: `https://www.linkedin.com/in/rachel-n-taylor/`
      }
    ]
  },
  developMiddleware: app => {
    app.use(
      `/.netlify/functions/`,
      proxy({
        target: `http://localhost:9000`,
        pathRewrite: {
          "/.netlify/functions/": ``
        }
      })
    );
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        schemaOutputPath: `schema.json`,
        typeDefsOutputPath: `types/graphql-types.ts`
      }
    },
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/lambda`,
        functionsOutput: `${__dirname}/lambda`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout/Markdown/index.ts`)
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 864,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
              tracedSVG: { color: `#D9027D` },
              disableBgImage: true,
              showCaptions: [`title`]
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          }
        ],
        remarkPlugins: [require(`remark-breaks`), require(`remark-heading-id`), require(`remark-unwrap-images`)],
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rachel Taylor`,
        short_name: `Rachel Taylor`,
        description: `Personal graphic design and illustration portfolio of Rachel Taylor.`,
        start_url: pathPrefix,
        background_color: `#fff`,
        theme_color: `#D9027D`,
        display: `standalone`,
        icon: `static/logos/logo.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
