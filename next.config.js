// next.config.js
require("dotenv").config();
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  env: {
    URI: process.env.URI
  }
});
