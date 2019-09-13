const mongoose = require('mongoose')
const Schema = mongoose.Schema

let postSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Sorry Name Required']
    },
    description: {
        type: String,
        required: [true, 'Sorry Description Required']
    },
    url: {
        type: String,
        required: [true, 'Sorry url Required']

    }
}, {
    timestamps: true
})


let post = mongoose.model('Post', postSchema)

module.exports = post