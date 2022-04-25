const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    tanks: [
        {
            name: {
                type: String,
            },
            salinity: {
                type: Number
            },
            Mg: {
                type: Number
            },
            Ph: {
                type: Number
            },
            Nitrate: {
                type: Number
            },
            Nitrite: {
                type: Number
            },
            Phosphate: {
                type: Number
            },
            Ammonia: {
                type: Number
            }
        }
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

module.exports = mongoose.model('User', UserSchema);