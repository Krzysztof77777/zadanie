/** @type {import('gatsby').GatsbyConfig} */
const path = require('path')

require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ['gatsby-plugin-image', "gatsby-plugin-styled-components", `gatsby-plugin-sass`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    }, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`, {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans`
        ],
        display: 'swap'
      }
    }
  ]
};