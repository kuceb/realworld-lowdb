let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy
const { User } = require('../models').get()
const crypto = require('crypto')

const validPassword = function (user, password) {
  let hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex')
  return user.hash === hash
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
    },
    function (email, password, done) {
      let user = User().find({ email }).cloneDeep().value()
      if (!user || !validPassword(user, password)) {
        return done(null, false, {
          errors: { 'email or password': 'is invalid' },
        })
      }

      return done(null, user)
    }
  )
)
