'use strict'

const router = require('express').Router()
const { UserController } = require('../controllers')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/login-google', UserController.loginGoogle)

// For admin -> do not forget to delete later on
router.get('/', UserController.findAll)

module.exports = router
