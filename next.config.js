// next.config.js
// require('dotenv').config();
// const webpack = require('webpack');
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});
