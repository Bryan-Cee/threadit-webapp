// next.config.js
require("dotenv").config();
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  env: {
    URI: process.env.URI,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL,
    AUTH0_SCOPE: process.env.AUTH0_SCOPE,
    REDIRECT_URI: process.env.REDIRECT_URI,
  }
});
