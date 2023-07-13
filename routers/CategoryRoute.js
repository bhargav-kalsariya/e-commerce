const { Router } = require('express');
const { authUser } = require('../middleware/authUser');

let CategoryController = require('../controller/CategoryController');
let CategoryRoute = Router();

// add category //

CategoryRoute.get('/addCategory', CategoryController.categoriesRender);
CategoryRoute.post('/addCategory', CategoryController.CategoryCreate);

// get category //

CategoryRoute.get('/getCategory', CategoryController.getCategory);

// update category //

CategoryRoute.patch('/updateCategory/:id', CategoryController.updateCategory);

// delete category //

CategoryRoute.get('/deleteCategory/:id', CategoryController.deleteCategory);


module.exports = CategoryRoute;