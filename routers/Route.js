const { Router } = require('express');
const Route = Router()
const Passport = require('passport');
const { authUser } = require('../middleware/authUser');
const { userSignup, userUpdate, userDelete, userLogin, UserProfileRender, userLogoutRender, userSignupRender, userLoginRender, indexRender, aboutPageRender, contactPageRender, blogPageRender, ShopRightSideRender, ShopListLeftSideRender, ShopListRightSideRender, ShopFullWidthRender, variableProductsRender, ExternalProductsRender, GalleryProductsRender, CountdownProductsRender, Error404Render, ComparePagesRender, CartPageRender, CheckoutPageRender, WishlistPageRender, BlogListRightRender, BlogListFullwidthRender, BlogGridRender, BlogGridRightRender, BlogGridFullwidthRender, BlogDetailsRender, BlogFAQRender } = require('../controller/userController');
const { getProductCategoryWise } = require('../controller/ProductController');

//          pages render routes             //

Route.get('/', indexRender);
Route.get('/signup', userSignupRender);
Route.get('/login', userLoginRender);
Route.get('/about-us', aboutPageRender);
Route.get('/contact-us', contactPageRender);
Route.get('/profile', authUser, UserProfileRender);
Route.get('/logout', userLogoutRender);
Route.get('/blog', blogPageRender);
Route.get('/shop-right-sidebar', ShopRightSideRender)
Route.get('/shop-list-left-sidebar', ShopListLeftSideRender)
Route.get('/shop-list-right-sidebar', ShopListRightSideRender)
Route.get('/shop-full-width', ShopFullWidthRender)
Route.get('/variable-products', variableProductsRender)
Route.get('/external-products', ExternalProductsRender)
Route.get('/gallery-products', GalleryProductsRender)
Route.get('/countdown-products', CountdownProductsRender)
Route.get('/error-404', Error404Render)
Route.get('/compare', ComparePagesRender)
Route.get('/cart', CartPageRender)
Route.get('/checkout', authUser, CheckoutPageRender)
Route.get('/wishlist', WishlistPageRender)
Route.get('/blog-list-right', BlogListRightRender)
Route.get('/blog-list-fullwidth', BlogListFullwidthRender)
Route.get('/blog-grid', BlogGridRender)
Route.get('/blog-grid-right', BlogGridRightRender)
Route.get('/blog-grid-fullwidth', BlogGridFullwidthRender)
Route.get('/blog-details', BlogDetailsRender)
Route.get('/blog-details-fullwidth', BlogGridFullwidthRender)
Route.get('/FAQ', BlogFAQRender)

//           post page route               //

Route.post('/signup', userSignup);
Route.post('/login', Passport.authenticate('local'), userLogin);

//        update and delete  page route       //

Route.patch('/update/:id', userUpdate);
Route.delete('/delete/:id', userDelete)

module.exports = Route