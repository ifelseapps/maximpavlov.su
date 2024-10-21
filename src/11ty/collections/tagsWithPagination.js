const lodashChunk = require('lodash.chunk')

const INNER_TAGS = ['all', 'note', 'notes']

module.exports = function (collection, { collectionAPI, size = 4 }) {
  let tagSet = new Set()

  const addTag = (tag) => {
    if (INNER_TAGS.includes(tag)) {
      return
    }

    tagSet.add(tag)
  }

  collectionAPI.forEach((templateObjet) => {
    if ('tags' in templateObjet.data) {
      const tagsProperty = templateObjet.data.tags
      if (Array.isArray(tagsProperty)) {
        tagsProperty.forEach((tag) => addTag(tag))
      } else if (typeof tagsProperty === 'string') {
        addTag(tag)
      }
    }
  })

  const pagedTags = []

  ;[...tagSet].forEach((tag) => {
    const tagCollection = collection.getFilteredByTag(tag)
    const pagedCollection = lodashChunk(tagCollection, size)
    pagedCollection.forEach((templateObjectsArray, index) => {
      pagedTags.push({
        tagName: tag,
        total: pagedCollection.length,
        path: `/tags/${tag}/${index ? index + 1 + '/' : ''}`,
        pageNumber: index,
        templateObjets: templateObjectsArray,
      })
    })
  })

  const groupedByTagName = lodashChunk(pagedTags, size)
  groupedByTagName.forEach((group) => {
    group.forEach((pageObject, index, source) => {
      pageObject.first = source[0].path
      pageObject.last = source[source.length - 1].path
      if (source[index - 1]) pageObject.previous = source[index - 1].path
      if (source[index + 1]) pageObject.next = source[index + 1].path
    })
  })

  return pagedTags
}
