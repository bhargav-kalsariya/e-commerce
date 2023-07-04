const { Router } = require('express');
const { authUser } = require('../middleware/authUser');
const { productsPageRender, getProduct, productCreate, deleteProduct, updateProduct, AtoZproductsSorting } = require('../controller/ProductController');
const ProductRoute = Router();

ProductRoute.get('/addProduct', productsPageRender)
ProductRoute.get('/getProduct', getProduct)
ProductRoute.get('/Alphabetically', AtoZproductsSorting)
ProductRoute.get('/AllProduct', getProduct)
ProductRoute.post('/addProduct', productCreate)
ProductRoute.delete('/deleteProduct/:id', deleteProduct)
ProductRoute.patch('/updateProduct/:id', updateProduct)

module.exports = ProductRoute;