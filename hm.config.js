const path = require('path')
module.exports = {
  type: 'react',
  webpack: {
    entries: "example/entry.js",
    output: {
      path: path.resolve(__dirname, './demo'),
      filename: "[name].js"
    }
  }
}
