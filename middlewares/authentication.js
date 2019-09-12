'use strict'

const { verifyToken } = require('../helpers/jwt')

module.exports = {
  authentication: function (req, res, next) {
    try {
      const decoded = verifyToken(req.headers.token)
      req.decoded = decoded
      next()
    } catch (err) {
      next({ status: 401, message: 'Please sign in first! You have no authorization' })
    }
  }
}
