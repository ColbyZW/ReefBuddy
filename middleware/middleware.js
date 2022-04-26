


module.exports.isLoggedIn = (req, res, next) => {
    if(req.session.loggedIn) {
        next();
    } else {
        console.log("NOT LOGGED IN")
        return res.send(false);
    }
}