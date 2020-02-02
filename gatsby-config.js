require(`dotenv`).config({
  path: `.env`
});

const pathPrefix = `/`;

module.exports = {
  pathPrefix,
  siteMetadata: {
    siteUrl: `https://racheltaylor.design${pathPrefix}`,
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
          default: require.resolve(`./src/components/Markdown/index.ts`)
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
        remarkPlugins: [require(`remark-breaks`), require(`remark-heading-id`)],
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-XXXXXX-X`
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
        icon: `src/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
