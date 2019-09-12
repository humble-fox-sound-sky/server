const router = require('express').Router()
const postModel = require('../controllers/post')


router.post('/', postModel.create)
router.get('/', postModel.findAll)



module.exports = router