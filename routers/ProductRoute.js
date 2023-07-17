const { Router } = require('express');
const { authUser } = require('../middleware/authUser');

let ProductController = require('../controller/ProductController');
let ProductRoute = Router();
let multer = require("multer");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/assets/productImage');
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

let upload = multer({ storage: storage });

// add product //

ProductRoute.get('/addProduct', ProductController.productsPageRender);
ProductRoute.post('/addProduct', upload.single('image'), ProductController.productCreate);

// get product // sortings //

ProductRoute.get('/shop', ProductController.getProduct);
ProductRoute.get('/products/:product', ProductController.ProductsRender);
ProductRoute.get('/featuredProducts', ProductController.FeaturedProductsRender);

// get product category wise //

ProductRoute.get('/productsCategory/:category', ProductController.getProductCategoryWise);

// update product //

ProductRoute.get('/updateProduct/:product', ProductController.updateProduct);
ProductRoute.post('/updateProduct/:product', upload.single('image'), ProductController.postUpdatedProduct);

// delete product //

ProductRoute.get('/deleteProduct/:product', ProductController.deleteProduct);

// add to cart //

ProductRoute.get('/cart/:product', authUser, ProductController.cartpagerander);



module.exports = ProductRoute;