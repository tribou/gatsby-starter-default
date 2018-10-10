// @flow

"use strict";

const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const precss = require("precss");

const { DEPLOY_ENV = "staging" } = process.env;

const host =
  DEPLOY_ENV === "staging" ? "www.qa.example.com" : "www.example.com";
const siteUrl = `https://${host}`;
const sitemap = `${siteUrl}/sitemap.xml`;
const title = "Gatsby Starter";
const shortTitle = "Starter";

// Variables to be shared across JS + CSS
const vars = {
  // colors
  colorTheme: "#663399",
  colorWhite: "#ffffff",

  // images
  imgIcon: "src/images/gatsby-icon.png",
};

module.exports = {
  siteMetadata: {
    vars,
    siteUrl,
    title: "Gatsby Default Starter",
    description: "Best site ever.",
  },
  plugins: [
    "gatsby-plugin-flow",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          precss({
            variables: vars,
          }),
          calc(),
          autoprefixer({
            flexbox: "no-2009",
          }),
        ],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => DEPLOY_ENV,
        env: {
          staging: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            host: null,
            sitemap: null,
          },
          production: {
            host,
            sitemap,
            policy: [{ userAgent: "*" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: shortTitle,
        start_url: "/",
        background_color: vars.colorWhite,
        theme_color: vars.colorTheme,
        display: "minimal-ui",
        icon: vars.imgIcon, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
};
