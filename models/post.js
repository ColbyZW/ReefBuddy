const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: {
        username: {
            type: String,
            required: true
        },
        
    },
    content: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        min: 0
    },
    comments: [
        {
            username: {
                type: String,
            },
            comment: {
                type:String
            }
        }
    ]
})

module.exports = mongoose.model("Post", PostSchema);