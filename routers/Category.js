const { Router } = require('express');
const { authUser } = require('../middleware/authUser');
const { categoriesRender, getCategory, CategoryCreate, deleteCategory, updateCategory } = require('../controller/CategoryController');
let route = Router();


route.get('/addCategory', categoriesRender);
route.get('/getCategory', getCategory)
route.post('/addCategory', authUser, CategoryCreate);
route.delete('/deleteCategory/:id', deleteCategory)
route.patch('/updateCategory/:id', updateCategory)

module.exports = route;