const router = require('express').Router()
const { Article } = require('../../models').get()
// return a list of tags
router.get('/', function (req, res, next) {
  let tagLists = Article().value().map((article) => article.tagList)
  let tags = [...new Set(tagLists.reduce((a, b) => a.concat(b), []))]
  return res.json({ tags })
})

module.exports = router
