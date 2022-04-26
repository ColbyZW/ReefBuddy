const Post = require('../models/post');


module.exports.index = async (req, res) => {
    const allPosts = await Post.find({});
    console.log("Session data on the index: ", req.session)
    res.send(allPosts);
}

module.exports.findByPage = async(req, res) => {
    const {page} = req.params;
    const posts = await Post.find({}, null, {skip: ((page-1)*8)}).limit(8);
    res.send(posts);
}

module.exports.addPost = async (req, res) => {
    res.send("Adding a post!");
}
