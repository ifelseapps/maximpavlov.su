const sass = require('eleventy-sass')
const rev = require('eleventy-plugin-rev')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItMultiMdTable = require('markdown-it-multimd-table')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const embedEverything = require('eleventy-plugin-embed-everything')
const pluginRss = require('@11ty/eleventy-plugin-rss')
const Image = require('@11ty/eleventy-img')
const { format } = require('date-fns')
const layeringCollection = require('./src/11ty/collections/tagsWithPagination')

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
  config.addPlugin(pluginRss)
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

  config.addPlugin(syntaxHighlight)

  config.addPlugin(embedEverything)

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
    .use(markdownItAttrs)
    .use(markdownItFootnote)
    .use(markdownItMultiMdTable)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader(),
      level: 2,
    })

  config.setLibrary('md', md)

  config.addCollection('tagsByFirstLetter', (api) => {
    let tagSet = new Set()
    const count = {}
    api.getAll().forEach(function (item) {
      if ('tags' in item.data) {
        let tags = item.data.tags

        tags.forEach((t) => (count[t] = (count[t] || 0) + 1))

        tags = tags.filter(function (item) {
          switch (item) {
            case 'all':
            case 'nav':
            case 'note':
            case 'notes':
            case 'travel':
            case 'travels':
              return false
          }

          return true
        })

        for (const tag of tags) {
          tagSet.add(tag)
        }
      }
    })

    const groups = [...tagSet].reduce((acc, t) => {
      const firstLetter = t.slice(0, 1)
      acc[firstLetter] = acc[firstLetter] || []
      acc[firstLetter].push({ name: t, count: count[t] })
      return acc
    }, {})

    return { groups, letters: Object.keys(groups).sort() }
  })

  config.addCollection('tagsWithPagination', (api) =>
    layeringCollection(api, {
      collectionAPI: api.getFilteredByGlob('src/notes/**/*.md'),
      size: 2,
    }),
  )

  config.addCollection('notes', (api) =>
    api.getFilteredByGlob('src/notes/**/*.md').reverse(),
  )

  /** @todo Дать более релевантное название */
  config.addFilter('objectKeys', (value) => {
    return Object.keys(value).sort((a, b) => b - a)
  })

  config.addFilter('dateAndMonth', (value) => {
    return format(value || new Date(), 'dd.MM')
  })

  config.addFilter('date', (value) => {
    return format(value || new Date(), 'dd.MM.yyyy')
  })

  config.addFilter('reverse', (arr) => {
    if (!Array.isArray(arr)) {
      return arr
    }
    return [...arr].reverse()
  })

  config.addFilter('dateToRfc3339', pluginRss.dateToRfc3339)
  config.addFilter('dateToRfc822', pluginRss.dateToRfc822)
  config.addFilter(
    'getNewestCollectionItemDate',
    pluginRss.getNewestCollectionItemDate,
  )
  config.addFilter('absoluteUrl', pluginRss.absoluteUrl)
  config.addFilter(
    'convertHtmlToAbsoluteUrls',
    pluginRss.convertHtmlToAbsoluteUrls,
  )

  config.addPairedShortcode('quote', (content, author, position, link) => {
    const authorHtml = author
      ? `<footer class="blockquote__footer">${
          link ? `<a href="${link}">${author}</a>` : author
        }${position ? `, ${position}` : ''}</footer>`
      : ''
    return `
      <blockquote class="blockquote">
        ${content.trim()}
        ${authorHtml}
      </blockquote>
    `
  })

  config.addPairedShortcode('note', (content) => {
    return `
      <div class="note">${content}</div>
    `
  })

  config.addPairedShortcode('figure', (content, caption) => {
    return `<figure class="figure">${content}${
      caption
        ? `<figcaption class="figure__caption">${caption}</figcaption>`
        : ''
    }</figure>`
  })

  config.addShortcode(
    'image',
    async (src, alt, sizes = '(min-width: 30em) 50vw, 100vw') => {
      const metadata = await Image(src, {
        widths: [320, 640, 960, 1200, 1800],
        formats: ['webp', 'jpeg'],
        urlPath: '/images/',
        outputDir: './_site/images/',
      })

      const imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
      }

      return Image.generateHTML(metadata, imageAttributes)
    },
  )

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
