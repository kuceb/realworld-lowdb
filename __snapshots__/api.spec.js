exports['API tests GET /tags - res.body 1'] = {
  "tags": [
    "tag1",
    "tag2",
    "tag3"
  ]
}

exports['API tests GET /tags - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": []
}

exports['API tests GET /articles - res.body 1'] = {
  "articles": [
    {
      "slug": "articleslug-3",
      "title": "Title Article Three",
      "description": "description article Three",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "favorited": false,
      "favoritesCount": 1,
      "author": {
        "username": "jim",
        "bio": "I'm Jim",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    },
    {
      "slug": "articleslug-2",
      "title": "Title Article Two",
      "description": "description article Two",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "favorited": false,
      "favoritesCount": 1,
      "author": {
        "username": "joe",
        "bio": "I'm Joe",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    },
    {
      "slug": "articleslug-1",
      "title": "Title Article One",
      "description": "description article one",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "favorited": false,
      "favoritesCount": 1,
      "author": {
        "username": "jake",
        "bio": "I'm Jake",
        "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
        "following": false
      }
    }
  ],
  "articlesCount": 3
}

exports['API tests GET /articles - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests PUT /articles/:article - res.body 1'] = {
  "article": {
    "slug": "articleslug-1",
    "title": "Did you train your dragon?",
    "description": "description article one",
    "body": "Body Article One",
    "createdAt": "2016-02-23T20:54:16.969Z",
    "updatedAt": "2016-02-23T20:54:16.969Z",
    "tagList": [
      "tag1",
      "tag2"
    ],
    "favorited": false,
    "favoritesCount": 1,
    "author": {
      "username": "jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  }
}

exports['API tests PUT /articles/:article - DB 1'] = {
  "articles": [
    {
      "title": "Did you train your dragon?",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests GET /articles/:article - res.body 1'] = {
  "article": {
    "slug": "articleslug-1",
    "title": "Title Article One",
    "description": "description article one",
    "body": "Body Article One",
    "createdAt": "2016-02-23T20:54:16.969Z",
    "updatedAt": "2016-02-23T20:54:16.969Z",
    "tagList": [
      "tag1",
      "tag2"
    ],
    "favorited": false,
    "favoritesCount": 1,
    "author": {
      "username": "jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  }
}

exports['API tests GET /articles/:article - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests GET /feed with auth - res.body 1'] = {
  "articles": [],
  "articlesCount": 0
}

exports['API tests GET /feed with auth - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests POST /:article/comments - res.body 1'] = {
  "comment": {
    "id": true,
    "body": {
      "comment": {
        "body": "POST test comment"
      }
    },
    "author": {
      "username": "jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  }
}

exports['API tests POST /:article/comments - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [
    {
      "id": true,
      "article": "articleslug-1",
      "author": "jake",
      "body": {
        "comment": {
          "body": "POST test comment"
        }
      }
    }
  ],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests POST /articles - res.body 1'] = {
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": [
      "reactjs",
      "angularjs",
      "dragons"
    ],
    "favorited": false,
    "author": {
      "username": "jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  }
}

exports['API tests POST /articles - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    },
    {
      "author": "jake",
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "You have to believe",
      "tagList": [
        "reactjs",
        "angularjs",
        "dragons"
      ]
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests POST /articles/:article/favorite - res.body 1'] = {
  "article": {
    "slug": "articleslug-1",
    "title": "Title Article One",
    "description": "description article one",
    "body": "Body Article One",
    "createdAt": "2016-02-23T20:54:16.969Z",
    "updatedAt": "2016-02-23T20:54:16.969Z",
    "tagList": [
      "tag1",
      "tag2"
    ],
    "favorited": true,
    "favoritesCount": 2,
    "author": {
      "username": "jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  }
}

exports['API tests POST /articles/:article/favorite - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 2,
      "favorited": true
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": [
        "articleslug-1"
      ],
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests DELETE /articles/:article/favorite - res.body 1'] = {
  "article": {
    "slug": "articleslug-1",
    "title": "Title Article One",
    "description": "description article one",
    "body": "Body Article One",
    "createdAt": "2016-02-23T20:54:16.969Z",
    "updatedAt": "2016-02-23T20:54:16.969Z",
    "tagList": [
      "tag1",
      "tag2"
    ],
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  }
}

exports['API tests DELETE /articles/:article/favorite - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 0,
      "favorited": false
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests GET /articles/:article/comments - res.body 1'] = {
  "comments": [
    {
      "id": 1,
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:22:56.637Z",
      "body": "Jake takes a Jacobian",
      "author": {
        "username": "jake",
        "bio": "I'm Jake",
        "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
        "following": false
      }
    },
    {
      "id": 2,
      "createdAt": "2015-02-18T03:22:56.637Z",
      "updatedAt": "2015-02-18T03:22:56.637Z",
      "body": "Jim takes a Jacobian",
      "author": {
        "username": "jim",
        "bio": "I'm Jim",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    },
    {
      "id": 3,
      "createdAt": "2014-02-18T03:22:56.637Z",
      "updatedAt": "2014-02-18T03:22:56.637Z",
      "body": "Joe takes a Jacobian",
      "author": {
        "username": "joe",
        "bio": "I'm Joe",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }
  ]
}

exports['API tests GET /articles/:article/comments - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [
    {
      "id": true,
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:22:56.637Z",
      "body": "Jake takes a Jacobian",
      "article": "articleslug-1",
      "author": "jake"
    },
    {
      "id": true,
      "createdAt": "2015-02-18T03:22:56.637Z",
      "updatedAt": "2015-02-18T03:22:56.637Z",
      "body": "Jim takes a Jacobian",
      "article": "articleslug-1",
      "author": "jim"
    },
    {
      "id": true,
      "createdAt": "2014-02-18T03:22:56.637Z",
      "updatedAt": "2014-02-18T03:22:56.637Z",
      "body": "Joe takes a Jacobian",
      "article": "articleslug-1",
      "author": "joe"
    }
  ],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests DELETE /:article/comments/:comment - res.body 1'] = {}

exports['API tests DELETE /:article/comments/:comment - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [
    {
      "id": true,
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:22:56.637Z",
      "body": "Jake takes a Jacobian",
      "article": "articleslug-1",
      "author": "jake"
    },
    {
      "id": true,
      "createdAt": "2015-02-18T03:22:56.637Z",
      "updatedAt": "2015-02-18T03:22:56.637Z",
      "body": "Jim takes a Jacobian",
      "article": "articleslug-1",
      "author": "jim"
    },
    {
      "id": true,
      "createdAt": "2014-02-18T03:22:56.637Z",
      "updatedAt": "2014-02-18T03:22:56.637Z",
      "body": "Joe takes a Jacobian",
      "article": "articleslug-1",
      "author": "joe"
    }
  ],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests GET /profiles/:username - res.body 1'] = {
  "profile": {
    "username": "jake",
    "bio": "I'm Jake",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": false
  }
}

exports['API tests GET /profiles/:username - DB 1'] = {
  "articles": [],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests POST /profiles/:username/follow - res.body 1'] = {
  "profile": {
    "username": "jake",
    "bio": "I'm Jake",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": true
  }
}

exports['API tests POST /profiles/:username/follow - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": [
        "jake"
      ],
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests DELETE /profiles/:username/follow - res.body 1'] = {
  "profile": {
    "username": "jake",
    "bio": "I'm Jake",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": false
  }
}

exports['API tests DELETE /profiles/:username/follow - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests GET /user - res.body 1'] = {
  "user": {
    "username": "jake",
    "email": "jake@jake.jake",
    "bio": "I'm Jake",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg"
  }
}

exports['API tests GET /user - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests PUT /user - res.body 1'] = {
  "user": {
    "username": "jake",
    "email": "jake@jake.jake",
    "bio": "I like to skateboard",
    "image": "https://i.stack.imgur.com/xHWG8.jpg"
  }
}

exports['API tests PUT /user - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I like to skateboard",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests POST /users/login - res.body 1'] = {
  "user": {
    "username": "jake",
    "email": "jake@jake.jake",
    "bio": "I'm Jake",
    "token": true,
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg"
  }
}

exports['API tests POST /users/login - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}

exports['API tests POST /users - res.body 1'] = {
  "user": {
    "username": "John",
    "email": "john@john.john",
    "bio": "",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg"
  }
}

exports['API tests POST /users - DB 1'] = {
  "articles": [],
  "comments": [],
  "users": [
    {
      "username": "John",
      "email": "john@john.john",
      "bio": "",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "salt": true,
      "hash": true
    }
  ]
}

exports['API tests GET /articles?author=jake - res.body 1'] = {
  "articles": [
    {
      "slug": "articleslug-1",
      "title": "Title Article One",
      "description": "description article one",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "favorited": false,
      "favoritesCount": 1,
      "author": {
        "username": "jake",
        "bio": "I'm Jake",
        "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
        "following": false
      }
    }
  ],
  "articlesCount": 1
}

exports['API tests GET /articles?author=jake - DB 1'] = {
  "articles": [
    {
      "title": "Title Article One",
      "slug": "articleslug-1",
      "body": "Body Article One",
      "createdAt": "2016-02-23T20:54:16.969Z",
      "updatedAt": "2016-02-23T20:54:16.969Z",
      "tagList": [
        "tag1",
        "tag2"
      ],
      "description": "description article one",
      "author": "jake",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Two",
      "slug": "articleslug-2",
      "body": "Body Article Two",
      "createdAt": "2017-02-23T20:54:16.969Z",
      "updatedAt": "2017-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag1"
      ],
      "description": "description article Two",
      "author": "joe",
      "favoritesCount": 1
    },
    {
      "title": "Title Article Three",
      "slug": "articleslug-3",
      "body": "Body Article Three",
      "createdAt": "2018-02-23T20:54:16.969Z",
      "updatedAt": "2018-02-23T20:54:16.969Z",
      "tagList": [
        "tag2",
        "tag3"
      ],
      "description": "description article Three",
      "author": "jim",
      "favoritesCount": 1
    }
  ],
  "comments": [
    {
      "id": true,
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:22:56.637Z",
      "body": "Jake takes a Jacobian",
      "article": "articleslug-1",
      "author": "jake"
    },
    {
      "id": true,
      "createdAt": "2015-02-18T03:22:56.637Z",
      "updatedAt": "2015-02-18T03:22:56.637Z",
      "body": "Jim takes a Jacobian",
      "article": "articleslug-1",
      "author": "jim"
    },
    {
      "id": true,
      "createdAt": "2014-02-18T03:22:56.637Z",
      "updatedAt": "2014-02-18T03:22:56.637Z",
      "body": "Joe takes a Jacobian",
      "article": "articleslug-1",
      "author": "joe"
    }
  ],
  "users": [
    {
      "username": "jake",
      "email": "jake@jake.jake",
      "bio": "I'm Jake",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "jim",
      "email": "jim@jim.jim",
      "bio": "I'm Jim",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    },
    {
      "username": "joe",
      "email": "joe@joe.joe",
      "bio": "I'm Joe",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false,
      "favorites": false,
      "hash": true,
      "salt": true
    }
  ]
}
