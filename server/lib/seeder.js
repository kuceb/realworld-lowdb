const Promise = require('bluebird')

const db = require('../src/db').get()

const seeder = {
  seed: (data) => Promise.resolve(db.assign(data).write()),
  read: () => Promise.resolve(db.cloneDeep().value()),

  clear: () => {
    return db.setState({
      articles: [],
      comments: [],
      users: [],
    }).write()
  },
}

module.exports = seeder
