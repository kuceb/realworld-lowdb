
# realworld-lowdb
*Realworld react-redux client + an in-place json database + Express server*


[![CircleCI](https://circleci.com/gh/Bkucera/realworld-lowdb.svg?style=svg)](https://circleci.com/gh/Bkucera/realworld-lowdb)

Install dependencies:
```
npm install
```

Run api tests:
```bash
# silence the annoying npm exit code error
npm run server:test --silent
```

Start server on port 3000:
```bash
npm run server:start
```

Start client on port 4100:
```bash
npm start
```

JSON database writes to `server/.data/db.json`.  
This prevents file watchers from picking up changes to the db.

