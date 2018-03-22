const _ = require('lodash')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const crypto = require('crypto')
const passport = require('passport')

const auth = require('../auth')
const db = require('../../db').get()
const secret = require('../../config').secret
const { User } = require('../../models').get()
const { toAuthJSON } = require('../../../lib/mappings')

router.get('/user', auth.required, function (req, res, next) {
  const user = User().find({ username: req.payload.username }).value()
  if (!user) {
    return res.sendStatus(401)
  }

  return res.json({ user: toAuthJSON(user) })
})

router.put('/user', auth.required, function (req, res, next) {
  let user = req.payload
    ? User().find({ username: req.payload.username }).value()
    : null
  if (!user) {
    return res.sendStatus(401)
  }
  // only update fields that were actually passed...
  if (!_.isUndefined(req.body.user.username)) {
    user.username = req.body.user.username
  }
  if (!_.isUndefined(req.body.user.email)) {
    user.email = req.body.user.email
  }
  if (!_.isUndefined(req.body.user.bio)) {
    user.bio = req.body.user.bio
  }
  if (!_.isUndefined(req.body.user.image)) {
    user.image = req.body.user.image
  }
  if (!_.isUndefined(req.body.user.password)) {
    user.hash = getHash(req.body.user.password, user.salt)
  }

  // console.log(User().find({ username: user.username }).value())
  User().find({ username: "jake" })
  .assign(user).write()
  .then(() => res.json({ user: toAuthJSON(user) }))
})

router.post('/users/login', function (req, res, next) {
  User()
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: 'can\'t be blank' } })
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: 'can\'t be blank' } })
  }

  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err)
    }

    if (user) {
      user.token = generateJWT(user)
      return res.json({ user: toAuthJSON(user) })
    } else {
      return res.status(422).json(info)
    }
  })(req, res, next)
})

router.post('/users', function (req, res, next) {
  // TODO validate usernames for uniquenesslogin
  // TODO allow changing of usernames
  let salt = getSalt()
  let hash = getHash(req.body.user.password, salt)

  let user = {
    username: req.body.user.username,
    email: req.body.user.email,
    bio: '',
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
    following: false,
    favorites: false,
    salt,
    hash,
  }

  User().push(user)
  .write()
  .then(() => res.json({ user: toAuthJSON(user) }))
})

module.exports = router

function generateJWT (user) {
  let today = new Date()
  let exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      username: user.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    secret
  )
}

function getHash (password, salt) {
  let hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex')
  return hash
}

function getSalt () {
  let salt = crypto.randomBytes(16).toString('hex')
  return salt
}

// function validPassword (user, password) {
//   // TODO: validate passwords
// }

