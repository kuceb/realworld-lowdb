const _ = require('lodash')
const { User } = require('../src/models').get()

let mappings = {
  userToJSONFor: (user, userFor) => {
    return {
      username: user.username,
      bio: user.bio,
      image:
        user.image ||
        'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: userFor ? _.includes(userFor.following, user.username) : false
    }
  },
  toAuthJSON: (user) => {
    return {
      username: user.username,
      email: user.email,
      bio: user.bio,
      token: user.token,
      image: user.image,
    }
  },
  articleToJSONFor: (article, user) => {
    return {
      slug: article.slug,
      title: article.title,
      description: article.description,
      body: article.body,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      tagList: article.tagList,
      favorited: user ? _.includes(user.favorites, article.slug) : false,
      favoritesCount: article.favoritesCount,
      author: mappings.userToJSONFor(
        User().find({ username: article.author }).value(),
        user),
    }
  },
  commentToJSONFor: (comment, user) => {
    return {
      id: comment.id,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      body: comment.body,
      author: mappings.userToJSONFor(User().find({ username: comment.author }).value(), user),
    }
  },
}

module.exports = mappings
