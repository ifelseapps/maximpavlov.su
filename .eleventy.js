const sass = require('eleventy-sass')
const rev = require('eleventy-plugin-rev')

module.exports = (config) => {
  const data = {
    layout: 'layouts/default.njk',
  }

  for (const key in data) {
    const value = data[key]
    config.addGlobalData(key, value)
  }

  config.addPassthroughCopy('src/assets')

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
    rev: false,
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['html', 'md', 'njk'],
  }
}
