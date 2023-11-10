const sass = require('eleventy-sass')
const rev = require('eleventy-plugin-rev')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItFootnote = require('markdown-it-footnote')
const { format } = require('date-fns')

/** @param {import("@11ty/eleventy").UserConfig} config */
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

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
    .use(markdownItAttrs)
    .use(markdownItFootnote)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.headerLink(),
      level: 2,
    })

  config.setLibrary('md', md)

  config.addCollection('notesByYear', (api) => {
    const notes = api.getFilteredByGlob('src/notes/**/*.md').reverse()
    const groups = {}

    for (const note of notes) {
      const year = note.data.date.getFullYear()
      groups[year] = groups[year] || []
      groups[year].push(note)
    }

    return groups
  })

  config.addFilter('objectKeys', (value) => {
    return Object.keys(value).sort((a, b) => b - a)
  })

  config.addFilter('dateAndMonth', (value) => {
    return format(value, 'dd.MM')
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
