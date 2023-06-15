const SignupModel = require("../models/singupSchema");
const bcrypt = require("bcrypt");
const { Category } = require("../models/categorySchema");

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
        let hasedPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hasedPassword
        let user = await SignupModel.create(req.body)
        res.render('index')
        console.log(user)
    }
}

let userLogin = async (req, res) => {
    res.render('index')
}

let getUser = async (req, res) => {
    res.send(req.user)
}

let userLogout = (req, res) => {
    req.flash('message', 'Logout Successfully');
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send(req.flash('message'))
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

let categoriesRender = (req, res) => {
    res.render('category');
}

let CategoryCreate = async (req, res) => {
    let category = await Category.create(req.body);
    res.send(category);
    console.log('category created successfully');
}


module.exports = { userSignup, userUpdate, userDelete, userLogin, getUser, userLogout, userSignupRender, userLoginRender, categoriesRender, CategoryCreate }