'use strict'

const express = require('express')
const upload_routes = require('./upload')
const { authentication } = require('../middlewares/authentication')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ page: 'Home', message: 'Connected to Mini WP Apps!' })
})

// Routing
// router.use(authentication)

router.use('/music' , upload_routes)

module.exports = router
