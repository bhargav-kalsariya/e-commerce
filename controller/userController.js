const SignupModel = require("../models/singupSchema");
const bcrypt = require("bcrypt");
const { Category } = require("../models/categorySchema");

//       index page controller          // 

let indexRender = (req, res) => {
    res.render('index')
}

//      signup page controller         // 

let userSignupRender = (req, res) => {
    res.render('signup')
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

//       login page controller          // 

let userLoginRender = (req, res) => {
    res.render('login')
}
let userLogin = async (req, res) => {
    res.render('index')
}

//      profile page controller         // 

let UserProfileRender = async (req, res) => {
    res.render('profile')
}

//     logout page controller          // 

let userLogoutRender = (req, res) => {
    req.flash('message', 'Logout Successfully');
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
    });
    // res.send(req.flash('message'))
    res.redirect('/');
}

//    user update and delete controller     //

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

//       category controller         //

let categoriesRender = (req, res) => {
    res.render('category');
}
let CategoryCreate = async (req, res) => {
    let category = await Category.create(req.body);
    res.send(category);
    console.log('category created successfully');
}

//     about and contact page controller        //

let aboutPageRender = (req, res) => {
    res.render('about-us')
}
let contactPageRender = (req, res) => {
    res.render('contact-us')
}

//      shop  controller          //

let UserShopRender = (req, res) => {
    res.render('shop')
}
let ShopRightSideRender = (req, res) => {
    res.render('shop-right-sidebar')
}
let ShopListLeftSideRender = (req, res) => {
    res.render('shop-list-left')
}
let ShopListRightSideRender = (req, res) => {
    res.render('shop-list-right')
}
let ShopFullWidthRender = (req, res) => {
    res.render('shop-fullwidth')
}
let ProductsRender = (req, res) => {
    res.render('product-details')
}
let variableProductsRender = (req, res) => {
    res.render('variable-product-details')
}
let ExternalProductsRender = (req, res) => {
    res.render('external-product-details')
}
let GalleryProductsRender = (req, res) => {
    res.render('gallery-product-details')
}
let CountdownProductsRender = (req, res) => {
    res.render('countdown-product-details')
}
let Error404Render = (req, res) => {
    res.render('error-404')
}
let ComparePagesRender = (req, res) => {
    res.render('compare')
}
let CartPageRender = (req, res) => {
    res.render('cart')
}
let CheckoutPageRender = (req, res) => {
    res.render('checkout')
}
let WishlistPageRender = (req, res) => {
    res.render('wishlist')
}

//      blog  controller            //

let blogPageRender = (req, res) => {
    res.render('blog')
}
let BlogListRightRender = (req, res) => {
    res.render('blog-list-right-sidebar')
}
let BlogListFullwidthRender = (req, res) => {
    res.render('blog-list-fullwidth')
}
let BlogGridRender = (req, res) => {
    res.render('blog-grid')
}
let BlogGridRightRender = (req, res) => {
    res.render('blog-grid-right-sidebar')
}
let BlogGridFullwidthRender = (req, res) => {
    res.render('blog-grid-fullwidth')
}
let BlogDetailsRender = (req, res) => {
    res.render('blog-details-sidebar')
}
let BlogDetailsFullWidthRender = (req, res) => {
    res.render('blog-details-fullwidth')
}
let BlogFAQRender = (req, res) => {
    res.render('frequently-questions')
}

module.exports = { userSignup, userUpdate, userDelete, userLogin, UserProfileRender, userLogoutRender, userSignupRender, userLoginRender, categoriesRender, CategoryCreate, indexRender, aboutPageRender, contactPageRender, UserShopRender, blogPageRender, ShopRightSideRender, ShopListLeftSideRender, ShopListRightSideRender, ShopFullWidthRender, ProductsRender, variableProductsRender, ExternalProductsRender, GalleryProductsRender, CountdownProductsRender, Error404Render, ComparePagesRender, CartPageRender, CheckoutPageRender, WishlistPageRender, BlogListRightRender, BlogListFullwidthRender, BlogGridRender, BlogGridRightRender, BlogGridFullwidthRender, BlogDetailsRender, BlogDetailsFullWidthRender, BlogFAQRender }