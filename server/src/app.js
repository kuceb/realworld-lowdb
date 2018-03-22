const cors = require('cors')
const path = require('path')
const debug = require('debug')('api:request:response')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

const isProduction = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'

// Create global app object
const app = express()

app.use(cors())

// Normal express config defaults
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (isTest) {
  app.use((req, res, next) => {
    res.once('finish', () => {
      debug('%o', {
        url: req.url,
        auth: !!req.headers['Authorization'],
        status: res.statusCode,
        reqBody: req.body,
        resBody: res.body,
      })
    })

    next()
  })
}

app.use(require('method-override')())
app.use(express.static(path.resolve(__dirname, '/public')))

app.use(
  session({
    secret: 'conduit',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
)

if (!isProduction) {
  app.use(errorhandler())
}

// if(isProduction){
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect('mongodb://localhost/conduit');
//   mongoose.set('debug', true);
// }

const initModels = (db) => {
  require('./models').init(db)
  require('./config/passport')
}

const initRoutes = () => {
  app.use(require('./routes'))

  // / catch 404 and forward to error handler
  app.use(function (req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // / error handlers

  // development error handler
  // will print stacktrace
  if (!isProduction) {
    app.use(function (err, req, res, next) {
      console.log(err.stack)

      res.status(err.status || 500)

      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      })
    })
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    })
  })
}

const setup = () => {
  return require('./db')
  .connect()
  .then(initModels)
  .then(initRoutes)
}

app.setup = () => {
  if (app.ready) {
    return Promise.resolve()
  }

  return setup().then(() => {
    app.ready = true
  })
}

const start = () => {
  return app.setup().then(() => {
    // finally, let's start our server...
    let server = app.listen(process.env.PORT || 3000, function () {
      console.log(`Listening on port ${  server.address().port}`)
    })
  })
}

module.exports = {
  app,

  start,
}
