const _ = require('lodash')
const router = require('express').Router()

const auth = require('../auth')
const { User } = require('../../models').get()
const { userToJSONFor } = require('../../../lib/mappings')

// Preload user profile on routes with ':username'
router.param('username', function (req, res, next, username) {
  let user = User().find({ username }).value()

  if (!user) {
    return res.sendStatus(404)
  }

  req.user = user

  return next()
})

router.get('/:username', auth.optional, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  return res.json({ profile: userToJSONFor(req.user, user) })
})

router.post('/:username/follow', auth.required, function (req, res, next) {
  let followName = req.user.username

  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }
  user.following = user.following || []
  user.following = user.following.concat([followName])
  return User().find({ username: user.username })
  .assign(user)
  .write()
  .then(() => res.json({ profile: userToJSONFor(User().find({ username: req.user.username }).value(), user) }))
})

router.delete('/:username/follow', auth.required, function (req, res, next) {
  let followName = req.user.username

  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }
  user.following = user.following || []
  _.remove(user.following, (value) => value === followName)
  if (_.isEmpty(user.following)) {
    user.following = false
  }

  return User().find({ username: user.username })
  .assign(user)
  .write()
  .then(() => res.json({ profile: userToJSONFor(User().find({ username: req.user.username }).value(), user) }))
})

module.exports = router
