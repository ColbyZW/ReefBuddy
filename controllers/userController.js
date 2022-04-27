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
            res.send(req.session);
        })
    } else {
        return res.send("500");
    }
}

module.exports.profile = async (req, res) => {
    console.log(req.session);
    const user = await User.findById(req.session.uid);
    res.send(user);
}

module.exports.login = (req, res) => {
    req.session.loggedIn = true;
    console.log("Hit the login route");
    res.send("Logged In!");
}