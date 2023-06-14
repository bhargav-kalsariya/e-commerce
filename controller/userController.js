const SignupModel = require("../models/singupSchema");
const bcrypt = require("bcrypt");

let salt = 10;

let userSignupRender = (req, res) => {
    res.render('signup')
}

let userLoginRender = (req, res) => {
    res.render('login')
}

let userSignup = async (req, res) => {
    let user = await SignupModel.findOne({ username: req.body.username })
    if (user) {
        res.send('username is already used by someone')
    }
    else {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if (err) {
                console.log(err)
            }
            else {
                req.body.password = hash
                let user = await SignupModel.create(req.body)
                console.log(req.body);
                res.render('index')
            }
        })
    }
}

let userLogin = async (req, res) => {
    res.render('index')
}

let getUser = async (req, res) => {
    res.send(req.user)
}

let userLogout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send('logged out');
}

let userUpdate = async (req, res) => {
    let { id } = req.params;
    let userUpdate = await SignupModel.findByIdAndUpdate(id, req.body);
    res.status(200).send(userUpdate);
    console.log('update user successfully');
}

let userDelete = async (req, res) => {
    let { id } = req.params;
    let userDelete = await SignupModel.findByIdAndDelete(id);
    res.status(200).send(userDelete);
    console.log('delete user successfully');
}

module.exports = { userSignup, userUpdate, userDelete, userLogin, getUser, userLogout, userSignupRender, userLoginRender }