const Promise = require('bluebird')

const db = require('../src/db').get()

const seeder = {
  seed: (data) => db.assign(data).write(),
  read: Promise.method(()=>db.cloneDeep().value()),

  clear: () => {
    return db.setState({
      articles: [],
      comments: [],
      users: [],
    }).write()
  },
}

module.exports = seeder
