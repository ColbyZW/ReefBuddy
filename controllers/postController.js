const Post = require('../models/post');
const User = require('../models/user');

module.exports.createPost = async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.send({
        msg: "Successfully made post",
        postId: post._id
    });
}

module.exports.getPostInfo = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.send(post)
}

module.exports.createReply = async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    console.log(req.body);
    if (req.body.username.length > 0 && req.body.comment.length > 0) {
        post.comments.push(req.body);
        post.save();
        res.send("Hey there!");
    } else {
        next();
    }
}

module.exports.removePost = async (req, res, next) => {
    const {id} = req.params;
    const post = await Post.findByIdAndDelete(id);
    res.send(post);
}