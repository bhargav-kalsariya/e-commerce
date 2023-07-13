const { Router } = require('express');
const { authUser } = require('../middleware/authUser');

let Route = Router();
let Passport = require('passport');
let userController = require('../controller/userController');

//          pages render routes             //

Route.get('/', userController.indexRender);
Route.get('/signup', userController.userSignupRender);
Route.get('/login', userController.userLoginRender);
Route.get('/about-us', userController.aboutPageRender);
Route.get('/contact-us', userController.contactPageRender);
Route.get('/profile', authUser, userController.UserProfileRender);
Route.get('/logout', userController.userLogoutRender);
Route.get('/blog', userController.blogPageRender);
Route.get('/shop-right-sidebar', userController.ShopRightSideRender);
Route.get('/shop-list-left-sidebar', userController.ShopListLeftSideRender);
Route.get('/shop-list-right-sidebar', userController.ShopListRightSideRender);
Route.get('/shop-full-width', userController.ShopFullWidthRender);
Route.get('/variable-products', userController.variableProductsRender);
Route.get('/external-products', userController.ExternalProductsRender);
Route.get('/gallery-products', userController.GalleryProductsRender);
Route.get('/countdown-products', userController.CountdownProductsRender);
Route.get('/error-404', userController.Error404Render);
Route.get('/compare', userController.ComparePagesRender);
Route.get('/cart', userController.CartPageRender);
Route.get('/checkout', authUser, userController.CheckoutPageRender);
Route.get('/wishlist', userController.WishlistPageRender);
Route.get('/blog-list-right', userController.BlogListRightRender);
Route.get('/blog-list-fullwidth', userController.BlogListFullwidthRender);
Route.get('/blog-grid', userController.BlogGridRender);
Route.get('/blog-grid-right', userController.BlogGridRightRender);
Route.get('/blog-grid-fullwidth', userController.BlogGridFullwidthRender);
Route.get('/blog-details', userController.BlogDetailsRender);
Route.get('/blog-details-fullwidth', userController.BlogGridFullwidthRender);
Route.get('/FAQ', userController.BlogFAQRender);

//           post page route               //

Route.post('/signup', userController.userSignup);
Route.post('/login', Passport.authenticate('local'), userController.userLogin);

module.exports = Route;