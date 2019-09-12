'use strict'

const { Article } = require('../models')

module.exports = {
  authorization: function (req, res, next) {
    Article.findOne({ _id: req.params.id, author: req.decoded.id })
      .then((article) => {
        console.log(article, req.decoded)
        if (String(article.author) === String(req.decoded.id)) {
          // req.prevFile = article
          next()
        } else {
          next({ status: 401, message: 'Unauthorized process! Cannot write other user\'s article' })
        }
      }).catch(next)
  }
}
