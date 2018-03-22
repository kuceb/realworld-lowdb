const _ = require('lodash')
const auth = require('../auth')
const crypto = require('crypto')
const router = require('express').Router()
const { Article, Comment, User } = require('../../models').get()
const db = require('../../db').get()

const {
  articleToJSONFor,
  commentToJSONFor,
} = require('../../../lib/mappings')

// Preload article objects on routes with ':article'
router.param('article', function (req, res, next, slug) {
  db.get().value()
  let article = Article().find({ slug }).value()
  if (!article) {
    return res.sendStatus(404)
  }
  req.article = article
  return next()
})

router.param('comment', function (req, res, next, id) {
  let comment = Comment().find({ id: +id }).value()
  if (!comment) {
    return res.status(404).send('Comment not found')
  }
  req.comment = comment
  return next()
})

router.get('/', auth.optional, function (req, res, next) {
  let query = []
  let limit = 20
  let offset = 0

  if (!_.isUndefined(req.query.limit)) {
    limit = req.query.limit
  }

  if (!_.isUndefined(req.query.offset)) {
    offset = req.query.offset
  }

  if (!_.isUndefined(req.query.tag)) {
    query.push(({ tagList }) => _.includes(tagList, req.query.tag))
  }

  let authorName = req.query.author
    ? User().find({ username: req.query.author }).value().username
    : null

  let favoriterName = req.query.favorited
    ? User().find({ username: req.query.favorited }).value().username
    : null

  if (authorName) {
    // query.author = author._id
    query.push(({ author }) => author.username === authorName)
  }

  if (favoriterName) {
    // query._id = { $in: favoriter.favorites }
    query.push(({ author }) => author.username === favoriterName)
  }

  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null


  let articles = Article()
    // apply filters based on authorName, favoriterName
    .filter(_.overEvery(query))
    // sort by 'createdAt', descending
    .sortBy('createdAt')
    .reverse()
    // start at offset index
    .slice(offset)
    // limit number of results
    .take(limit)
    .value()
    .map((article) => articleToJSONFor(article, user))

  let articlesCount = articles.length

  return res.json({
    articles,
    articlesCount,
  })
})

router.get('/feed', auth.required, function (req, res, next) {
  let limit = 20
  let offset = 0

  if (!_.isUndefined(req.query.limit)) {
    limit = req.query.limit
  }

  if (!_.isUndefined(req.query.offset)) {
    offset = req.query.offset
  }

  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }

  let articles = Article().filter(({ author }) =>
    _.includes(user.following, author)
  )
    .take(limit)
    .slice(offset)
    .value()
    .map((article) => articleToJSONFor(article, user))

  let articlesCount = articles.length

  return res.json({
    articles,
    articlesCount,
  })
})

router.post('/', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }

  let article = {
    author: user.username,
    title: req.body.article.title,
    description: req.body.article.description,
    body: req.body.article.body,
    tagList: req.body.article.tagList,
  }

  return Article().push(article)
  .write()
  .then(() => res.json({ article: articleToJSONFor(article, user) }))
})

// return a article
router.get('/:article', auth.optional, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  return res.json({ article: articleToJSONFor(req.article, user) })
})

// update article
router.put('/:article', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }

  if (req.article.author !== user.username) {
    return res.sendStatus(403)
  }
  if (!_.isUndefined(req.body.article.title)) {
    req.article.title = req.body.article.title
  }

  if (!_.isUndefined(req.body.article.description)) {
    req.article.description = req.body.article.description
  }

  if (!_.isUndefined(req.body.article.body)) {
    req.article.body = req.body.article.body
  }

  if (!_.isUndefined(req.body.article.tagList)) {
    req.article.tagList = req.body.article.tagList
  }

  return Article().find({ slug: req.article.slug })
  .assign(req.article)
  .write()
  .then(() => res.json({ article: articleToJSONFor(req.article, user) }))
})

// delete article
router.delete('/:article', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }

  if (req.article.author !== user.username) {
    return res.sendStatus(403)
  }

  return Article().remove({ slug: req.article.slug })
  .write()
  .then(() => res.sendStatus(204))
})

// Favorite an article
router.post('/:article/favorite', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.statusCode(401)
  }

  user.favorites = user.favorites || []
  user.favorites.push(req.article.slug)
  if (_.isEmpty(user.favorites)) user.favorites = false

  req.article.favorited = true

  req.article.favoritesCount += 1

  User().find({ username: user.username })
  .assign(user)
  .write()
  .then(() =>
      Article().find({ slug: req.article.slug })
      .assign(req.article)
      .write()
    )
  .then((db) => res.json({ article: articleToJSONFor(req.article, user) }))
})

// Unfavorite an article
router.delete('/:article/favorite', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.statusCode(401)
  }

  user.favorites = user.favorites || []
  user.favorites = user.favorites.filter((article) => !(article === req.article.slug))
  if (_.isEmpty(user.favorites)) user.favorites = false

  req.article.favorited = false
  req.article.favoritesCount -= 1

  return User().find({ username: user.username })
  .assign(user)
  .write()
  .then(() =>
      Article().find({ slug: req.article.slug })
      .assign(req.article)
      .write()
    )
  .then((db) => res.json({ article: articleToJSONFor(req.article, user) }))
})

// return an article's comments
router.get('/:article/comments', auth.optional, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null

  let comments = Comment().filter({ article: req.article.slug })
    .value()
    .map((comment) => commentToJSONFor(comment, user))

  return res.json({ comments })
})

// create a new comment
router.post('/:article/comments', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }

  let comment = {
    id: genUUID(),
    article: req.article.slug,
    author: user.username,
    body: req.body,
  }

  return Comment().push(comment)
  .write()
  .then(() => {
    res.json({ comment: commentToJSONFor(comment, user) })
  })
})

router.delete('/:article/comments/:comment', auth.required, function (
  req,
  res,
  next
) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }
  if (req.comment.author !== user.username) {
    return res.sendStatus(403)
  }

  return Comment().find({ id: req.comment.id })
  .remove()
  .write()
  .then((db) => res.sendStatus(204))
})

module.exports = router

function genUUID () {
  return crypto.randomBytes(16).toString('hex')
}
