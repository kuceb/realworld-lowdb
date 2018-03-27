`
npm install --save-dev supertest snap-shot-it bluebird lodash

`


const _ = require('lodash')
const Promise = require('bluebird')
const snapshot = require('snap-shot-it')
const supertest = require('supertest')

const app = require('../src/app').app
const request = supertest(app)

let seeder

describe('API tests', () => {
  before(() => {
    return app.setup().then(() => {
      seeder = require('../lib/seeder')
    })
  })

  beforeEach('clear db', function () {
    return seeder.clear()
  })

  it('GET /tags', () => {
    const seed = _.cloneDeep(require('../seeds/articles/many.json'))
    return seeder.seed(seed)
    .then(() => request.get('/api/tags').expect(200))
    .then((res) => snapshot(res.body))
  })

  // it('POST /user/login', () =>
  //   seedAll()
  //   .then(() =>
  //     request
  //     .post('/api/users/login')
  //     .send({
  //       user: {
  //         email: 'jake@jake.jake',
  //         password: 'jakejake',
  //       },
  //     })
  //     .expect(200)
  //   )
  // )
})


// const login = () =>
//   seedUsersMany()
//   .then(() => seedArticlesMany())
//   .then(() =>
//     request
//     .post('/api/users/login')
//     .send({
//       user: {
//         email: 'jake@jake.jake',
//         password: 'jakejake',
//       },
//     })
//     .expect(200)
//   )


// const seedUsersMany = () => {
//   const seed = _.cloneDeep(require('../seeds/users/many.json'))
//   return seeder.seed(seed)
// }
// const seedArticlesMany = () => {
//   const seed = _.cloneDeep(require('../seeds/articles/many.json'))
//   return seeder.seed(seed)
// }
// const seedCommentsMany = () => {
//   const seed = _.cloneDeep(require('../seeds/comments/many.json'))
//   return seeder.seed(seed)
// }
// const seedAll = () =>
//   seedUsersMany()
//   .then(seedArticlesMany)
//   .then(seedCommentsMany)


// // cleanse the db of all variable data
// const cleanseDb = (db) => {
//   let cleanse = {
//     users: ['salt', 'hash'],
//     articles: [],
//     comments: ['id'],
//   }

//   Object.keys(db).forEach((key) => {
//     db[key] = db[key].map((item) => {
//       cleanse[key].forEach((prop) => {
//         item[prop] = !!item[prop]
//       })
//       return item
//     }
//     )
//   })
//   return db
// }


// const snapshotAll = (res) =>
//   Promise.resolve(snapshot(`${getTestName()} - res.body`, res.body))
//   .then(yieldDb)
//   .then(cleanseDb)
//   .then((db) => snapshot(`${getTestName()} - DB`, db))
