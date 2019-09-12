'use strict'

const express = require('express')
const userRouter = require('./user')
const articleRouter = require('./article')
const { authentication } = require('../middlewares/authentication')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ page: 'Home', message: 'Connected to Mini WP Apps!' })
})

// Routing
router.use('/users', userRouter)
router.use(authentication)
router.use('/articles', articleRouter)

// route.post('/upload', images.multer.single('image'), images.sendUploadToGCS, (req, res) => {
//   res.send({
//     status: 200,
//     message: 'Your file is successfully uploaded',
//     link: req.file.cloudStoragePublicUrl
//   })
// })

// route.get('/*', (req, res) => {
//   res.status(404).json({ error: 'Not Found :(' })
// })

module.exports = router
