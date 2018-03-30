const _ = require('lodash')
const fs = require('fs-extra')
const path = require('path')
const lowDb = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const defaultArticles = _.cloneDeep(require('../../seeds/articles/many.json'))
const defaultComments = _.cloneDeep(require('../../seeds/comments/many.json'))
const defaultUsers = _.cloneDeep(require('../../seeds/users/many.json'))

if (!fs.existsSync(path.resolve('./server/.data'))) {
  fs.mkdirSync(path.resolve('./server/.data'))
}
const adapter = new FileAsync('./server/.data/db.json')

let dbConnection = null

module.exports = {
  get: () => {
    return dbConnection
  },

  close: () => {
    dbConnection = null
  },

  connect: () => {
    return lowDb(adapter).then((db) => {
      return db
        .defaults({
          articles: defaultArticles.articles,
          users: defaultUsers.users,
          comments: defaultComments.comments,
        })
        .write()
        .then(() => {
          dbConnection = db
          return db
        })
    })
  },
}
