/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

const withPreact = require("next-plugin-preact")

module.exports = withPreact({
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src")
    return config
  },
  images: {
    domains: [
      "github.com"
    ],
  },
})
