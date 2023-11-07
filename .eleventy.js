const sass = require('eleventy-sass')
const rev = require('eleventy-plugin-rev')

module.exports = (config) => {
  config.addPlugin(rev)
  config.addPlugin(sass, {
    compileOptions: {
      permalink: function (contents, inputPath) {
        return (data) =>
          data.page.filePathStem.replace(/^\/scss\//, '/css/') + '.css'
      },
    },
    sass: {
      style: 'compressed',
      sourceMap: false,
      loadPaths: ['src/_includes/scss'],
      includes: 'src/_includes/scss',
    },
    rev: true,
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'md', 'njk'],
  }
}
