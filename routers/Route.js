const { Router } = require('express');
const Route = Router()
const Passport = require('passport');
const SignupModel = require('../models/singupSchema');
const { authUser } = require('../middleware/authUser');
const { userSignup, userUpdate, userDelete, userLogin, getUser, userLogout, userSignupRender, userLoginRender } = require('../controller/userController');

Route.get('/signup', userSignupRender);

Route.get('/login', userLoginRender);

Route.get('/profile', authUser, getUser);

Route.get('/logout', userLogout);

Route.post('/signup', userSignup);

Route.post('/login', Passport.authenticate('local'), userLogin)

Route.patch('/update/:id', userUpdate);

Route.delete('/delete/:id', userDelete)

module.exports = Route