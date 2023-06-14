exports.authUser = (req, res, next) => {
    if (req.user) {
        return next();
    }
    else {
        res.render('login')
    }
};