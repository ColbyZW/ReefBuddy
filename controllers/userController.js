const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltrounds = 10;


module.exports.createUser = async (req, res) => {
    console.log("Hit Profile Creation: ", req.body);
    const match = await User.find({ email: req.body.email })
    if (!match.length) {
        await bcrypt.hash(req.body.password, saltrounds, async function(err, hash) {
            req.body.password = hash;
            const user = new User(req.body);
            const savedUser = await user.save();
            req.session.uid = savedUser._id;
            res.send(savedUser);
        })
    } else {
        return res.send("500");
    }
}


module.exports.logout = async (req, res) => {
    req.session.uid = null;
    res.send(req.session);
}


module.exports.profile = async (req, res) => {
    const user = await User.findById(req.session.uid);
    res.send(user);
}

module.exports.login = async (req, res) => {
    const user = await User.find({email: req.body.email});
    console.log("Here is the userdata: ", user);
    bcrypt.compare(req.body.password, user[0].password, async function(err, result) {
        if(result) {
            req.session.uid = user[0]._id;
            return res.send(user[0]);
        }
    })
}