const router = require('express').Router()
const postModel = require('../controllers/post')
const upload = require('../middlewares/gcs')

router.post('/', upload.multer.single('audio'), upload.sendUploadToGCS, upload.validate_format, postModel.create)
router.get('/', postModel.findAll)
router.get('/test', (req, res, next) => {
  res.send('hello world!')
})


module.exports = router