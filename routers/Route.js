const { Router } = require('express');
const Route = Router()
const Passport = require('passport');
const SignupModel = require('../models/singupSchema');
const { authUser } = require('../middleware/authUser');
const { userSignup, userUpdate, userDelete, userLogin, UserProfileRender, userLogoutRender, userSignupRender, userLoginRender, categoriesRender, CategoryCreate, indexRender, aboutPageRender, contactPageRender, UserShopRender, blogPageRender, ShopRightSideRender, ShopListLeftSideRender, ShopListRightSideRender, ShopFullWidthRender } = require('../controller/userController');

//          pages render routes             //

Route.get('/', indexRender);
Route.get('/signup', userSignupRender);
Route.get('/login', userLoginRender);
Route.get('/addCategory', categoriesRender);
Route.get('/about-us', aboutPageRender);
Route.get('/contact-us', contactPageRender);
Route.get('/profile', authUser, UserProfileRender);
Route.get('/logout', userLogoutRender);
Route.get('/shop', UserShopRender);
Route.get('/blog', blogPageRender);
Route.get('/shop-right-sidebar', ShopRightSideRender)
Route.get('/shop-list-left-sidebar', ShopListLeftSideRender)
Route.get('/shop-list-right-sidebar', ShopListRightSideRender)
Route.get('/shop-full-width', ShopFullWidthRender)

//           post page route               //

Route.post('/signup', userSignup);
Route.post('/login', Passport.authenticate('local'), userLogin)
Route.post('/addCategory', authUser, CategoryCreate);

//        update and delete  page route       //

Route.patch('/update/:id', userUpdate);
Route.delete('/delete/:id', userDelete)

module.exports = Route