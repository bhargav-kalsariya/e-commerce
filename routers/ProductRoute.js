const { Router } = require('express');
const { authUser } = require('../middleware/authUser');
const { productsPageRender, getProduct, productCreate, deleteProduct, updateProduct, getProductCategoryWise, postUpdatedProduct, ProductsRender } = require('../controller/ProductController');
const ProductRoute = Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/assets/productImage');
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})
const upload = multer({ storage: storage });

// add product //

ProductRoute.get('/addProduct', productsPageRender)
ProductRoute.post('/addProduct', upload.single('image'), productCreate)

// get product // sortings //

ProductRoute.get('/shop', getProduct)
ProductRoute.get('/products/:product', ProductsRender)


// get product category wise //

ProductRoute.get('/productsCategory/:category', getProductCategoryWise)

// update product //

ProductRoute.get('/updateProduct/:product', updateProduct);
ProductRoute.post('/updateProduct/:product', postUpdatedProduct);

// delete product //

ProductRoute.get('/deleteProduct/:product', deleteProduct);


module.exports = ProductRoute;