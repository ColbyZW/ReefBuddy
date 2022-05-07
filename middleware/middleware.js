

module.exports.isLoggedIn = (req, res, next) => {
    if(req.session.uid) {
        next();
    } else {
        console.log("NOT LOGGED IN")
        return res.redirect('/home');
    }
}