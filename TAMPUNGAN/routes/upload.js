const express = require('express');
const router = express.Router();    
const upload = require('../helpers/gcs')
const { uploadController } = require('../controllers')

router.post('/' , upload.multer.single('audio') , upload.sendUploadToGCS ,  uploadController.uploadMusic)


module.exports = router
