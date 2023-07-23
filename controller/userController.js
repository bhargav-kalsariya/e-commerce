const SignupModel = require("../models/singupSchema");
const bcrypt = require("bcrypt");

//       index page controller          // 

let indexRender = (req, res) => {

    res.render('index');

}

//      signup page controller         // 

let userSignupRender = (req, res) => {

    res.render('signup');

}

let userSignup = async (req, res) => {

    let user = await SignupModel.findOne({ username: req.body.username });

    if (user) {

        res.send('username is already used by someone');

    }
    else {

        let hasedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hasedPassword;
        let user = await SignupModel.create(req.body);
        res.render('index');
        console.log(user);

    };

};

//       login page controller          // 

let userLoginRender = (req, res) => {

    res.render('login');

};

let userLogin = async (req, res) => {

    res.render('index');

};

//      profile page controller         // 

let UserProfileRender = async (req, res) => {

    let user = req.user;
    res.render('profile', { user });

};

//     logout page controller          // 

let userLogoutRender = (req, res) => {

    req.flash('message', 'Logout Successfully');
    req.logout((err) => {

        if (err) {
            console.log(err);
        };

    });
    // res.send(req.flash('message'))
    res.redirect('/');

};

//     about and contact page controller        //

let aboutPageRender = (req, res) => {

    res.render('about-us');

};

let contactPageRender = (req, res) => {

    res.render('contact-us');

};

//      shop  controller          //

let ShopRightSideRender = (req, res) => {

    res.render('shop-right-sidebar');

};

let ShopListLeftSideRender = (req, res) => {

    res.render('shop-list-left');

};

let ShopListRightSideRender = (req, res) => {

    res.render('shop-list-right');

};

let ShopFullWidthRender = (req, res) => {

    res.render('shop-fullwidth');

};

let variableProductsRender = (req, res) => {

    res.render('variable-product-details');

};

let ExternalProductsRender = (req, res) => {

    res.render('external-product-details');

};

let GalleryProductsRender = (req, res) => {

    res.render('gallery-product-details');

};

let CountdownProductsRender = (req, res) => {

    res.render('countdown-product-details');

};

let Error404Render = (req, res) => {

    res.render('error-404');

};

let ComparePagesRender = (req, res) => {

    res.render('compare');

};

let CheckoutPageRender = (req, res) => {

    res.render('checkout');

};

let WishlistPageRender = (req, res) => {

    res.render('wishlist');

};

//      blog  controller            //

let blogPageRender = (req, res) => {

    res.render('blog');

};

let BlogListRightRender = (req, res) => {

    res.render('blog-list-right-sidebar');

};

let BlogListFullwidthRender = (req, res) => {

    res.render('blog-list-fullwidth');

};

let BlogGridRender = (req, res) => {

    res.render('blog-grid');

};

let BlogGridRightRender = (req, res) => {

    res.render('blog-grid-right-sidebar');

};

let BlogGridFullwidthRender = (req, res) => {

    res.render('blog-grid-fullwidth');

};

let BlogDetailsRender = (req, res) => {

    res.render('blog-details-sidebar');

};

let BlogDetailsFullWidthRender = (req, res) => {

    res.render('blog-details-fullwidth');

};

let BlogFAQRender = (req, res) => {

    res.render('frequently-questions');

};

module.exports = { userSignup, userLogin, UserProfileRender, userLogoutRender, userSignupRender, userLoginRender, indexRender, aboutPageRender, contactPageRender, blogPageRender, ShopRightSideRender, ShopListLeftSideRender, ShopListRightSideRender, ShopFullWidthRender, variableProductsRender, ExternalProductsRender, GalleryProductsRender, CountdownProductsRender, Error404Render, ComparePagesRender, CheckoutPageRender, WishlistPageRender, BlogListRightRender, BlogListFullwidthRender, BlogGridRender, BlogGridRightRender, BlogGridFullwidthRender, BlogDetailsRender, BlogDetailsFullWidthRender, BlogFAQRender }