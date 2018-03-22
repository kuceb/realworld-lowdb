let models = {}

const init = (db) => {
  const createModel = (key) => {
    return db.get(key)
  }

  models = {
    User: () => createModel('users'),
    Article: () => createModel('articles'),
    Comment: () => createModel('comments'),
  }
  return models
}

module.exports = {
  init,
  get: () => models,
}
