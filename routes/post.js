const router = require('express').Router()
const postModel = require('../controllers/post')
const upload = require('../middlewares/gcs')

router.post('/', upload.multer.single('audio'), upload.sendUploadToGCS, upload.validate_format, postModel.create)
router.get('/', postModel.findAll)

module.exports = router