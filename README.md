![logo](project-logo.png)

# Cypress-example-realworld
*a full stack example of Cypress use cases and best practices*


[![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-realworld.svg?style=svg&circle-token=f127e83138e505b26bb90ab7c0bcb60e5265fecb)](https://circleci.com/gh/cypress-io/cypress-example-realworld)

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

