const express = require('express');
const router = express.Router();    
const upload = require('../middlewares/gcs')
const { uploadController } = require('../controllers')

router.post('/' , upload.multer.single('audio') , upload.sendUploadToGCS ,upload.validate_format,  uploadController.uploadMusic);


module.exports = router
