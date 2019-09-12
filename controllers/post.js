const postModel = require('../model/post.js')



class postController {

    static create(req, res, next) {

        const {
            name,
            description,
            url
        } = req.body

        let obj = {
            name,
            description,
            url
        }

        postModel.create(obj)
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(next)
    }

    static findAll(req, res, next) {

        postModel.find()
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(next)

    }

}

module.exports = postController