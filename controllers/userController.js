const User = require('../models/user');


module.exports.createUser = async (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    console.log("Here is the user: ", user);
    await user.save()
    res.send("Creating user");
}

module.exports.profile = (req, res) => {
    res.send("Loading Profile Page");
}