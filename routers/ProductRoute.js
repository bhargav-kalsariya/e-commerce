const { Router } = require('express');
const { authUser } = require('../middleware/authUser');
const { productsPageRender, getProduct, productCreate, deleteProduct, updateProduct, AtoZproductsSorting, getProductCategoryWise } = require('../controller/ProductController');
const ProductRoute = Router();

ProductRoute.get('/addProduct', productsPageRender)
ProductRoute.get('/shop', getProduct)
ProductRoute.get('/Alphabetically', AtoZproductsSorting)
ProductRoute.get('/products/:category', getProductCategoryWise)
ProductRoute.post('/addProduct', productCreate)
ProductRoute.get('/deleteProduct/:product', deleteProduct)
ProductRoute.patch('/updateProduct/:id', updateProduct)

module.exports = ProductRoute;