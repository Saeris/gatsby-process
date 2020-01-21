require(`dotenv`).config({
  path: `.env`
});

const config = require(`./config`);

const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: `Rachel Taylor`,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
    title: `Rachel Taylor`,
    headline: `Graphic Designer & Illustrator`,
    navLinks: [
      {
        children: `Projects`,
        to: `/projects`,
        external: false
      },
      {
        children: `About`,
        to: `/about`,
        external: false
      },
      {
        children: `Contact`,
        to: `/contact`,
        external: false
      },
      {
        children: `LinkedIn`,
        to: `https://www.linkedin.com/in/rachel-n-taylor/`,
        external: true
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`
          }
        ],
        extensions: [`.mdx`, `.md`]
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/config`
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
      resolve: `gatsby-source-instagram`,
      options: {
        access_token: process.env.ACCESS_TOKEN,
        instagram_id: process.env.BUSINESS_ID
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: `src/favicon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
