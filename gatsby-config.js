require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    accessToken: process.env.STRAPI_TOKEN,
    collectionTypes: ['company', 'product', 'box', 'category', 'type'],
    singleTypes: [],
};

module.exports = {
    siteMetadata: {
        title: `Обувь Оптом`,
        description: `Обувь оптом от производителя компании Марко`,
        titleTemplate: `%s | Обувь Оптом`,
        author: `@GenrichSarbaj`,
        siteUrl: `https://marko-opt.ru`,
        image: `/mainimg.png`,
        twitterUsername: '@GenrichSarbaj'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ED1C24`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `src/static/gatsby-icon.png`, // This path is relative to the root of the site. `src/images/gatsby-icon.png`
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `xyy8gzypyva1`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
}
