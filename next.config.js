const exportPathMap = require('./exportPathMap')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  exportPathMap
})
