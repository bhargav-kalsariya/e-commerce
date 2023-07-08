const { Router } = require('express');
const { authUser } = require('../middleware/authUser');
const { categoriesRender, getCategory, CategoryCreate, deleteCategory, updateCategory } = require('../controller/CategoryController');
let CategoryRoute = Router();


CategoryRoute.get('/addCategory', categoriesRender);
CategoryRoute.get('/getCategory', getCategory)
CategoryRoute.post('/addCategory', CategoryCreate);
CategoryRoute.get('/deleteCategory/:id', deleteCategory)
CategoryRoute.patch('/updateCategory/:id', updateCategory)

module.exports = CategoryRoute;