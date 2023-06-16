const { Router } = require('express');
const Route = Router()
const Passport = require('passport');
const SignupModel = require('../models/singupSchema');
const { authUser } = require('../middleware/authUser');
const { userSignup, userUpdate, userDelete, userLogin, UserProfile, userLogout, userSignupRender, userLoginRender, categoriesRender, CategoryCreate, indexRender, aboutPageRender } = require('../controller/userController');

//                                          index page render routes                         //

Route.get('/', indexRender);

//                                          signup page render routes                        //

Route.get('/signup', userSignupRender);
Route.post('/signup', userSignup);

//                                          login page render routes                         //

Route.get('/login', userLoginRender);
Route.post('/login', Passport.authenticate('local'), userLogin)

//                                          profile page render routes                       //

Route.get('/profile', authUser, UserProfile);

//                                          logout page render routes                        //

Route.get('/logout', userLogout);

//                                          category page render routes                          //

Route.get('/addCategory', categoriesRender);
Route.post('/addCategory', authUser, CategoryCreate);

//                                          about page render routes                         //

Route.get('/about-us', aboutPageRender);

//                                          other page render routes                         //

Route.patch('/update/:id', userUpdate);
Route.delete('/delete/:id', userDelete)

module.exports = Route