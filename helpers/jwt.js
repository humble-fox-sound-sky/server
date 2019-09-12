'use strict'

const jwt = require('jsonwebtoken')
const SECRET_JWT = process.env.SECRET_JWT

module.exports = {
  generateToken: function (payload) {
    return jwt.sign(payload, SECRET_JWT)
  },
  verifyToken: function (token) {
    return jwt.verify(token, SECRET_JWT)
  }
}
