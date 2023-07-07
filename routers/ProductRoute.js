const { Router } = require('express');
const { authUser } = require('../middleware/authUser');
const { productsPageRender, getProduct, productCreate, deleteProduct, updateProduct, AtoZproductsSorting, getProductCategoryWise, postUpdatedProduct } = require('../controller/ProductController');
const ProductRoute = Router();

// add product //

ProductRoute.get('/addProduct', productsPageRender)
ProductRoute.post('/addProduct', productCreate)

// get product //

ProductRoute.get('/shop', getProduct)

// sorting //

ProductRoute.get('/Alphabetically', AtoZproductsSorting)

// get product category wise //

ProductRoute.get('/products/:category', getProductCategoryWise)

// update product //

ProductRoute.get('/updateProduct/:product', updateProduct);
ProductRoute.post('/updateProduct/:product', postUpdatedProduct);

// delete product //

ProductRoute.get('/deleteProduct/:product', deleteProduct);


module.exports = ProductRoute;