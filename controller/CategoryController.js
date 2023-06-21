const { Category } = require("../models/categorySchema");
let categoriesRender = (req, res) => {
    res.render('category');
}
let CategoryCreate = async (req, res) => {
    let categories = await Category.findOne({ name: req.body.name });
    if (!categories) {
        let category = await Category.create(req.body);
        res.send(category);
        console.log('category created successfully');
    }
    else {
        res.send('category already exists')
    }
}
let getCategory = async (req, res) => {
    let category = await Category.find();
    res.send(category);
}
let deleteCategory = async (req, res) => {
    let { id } = req.params;
    let deleteCategory = await Category.findByIdAndDelete(id);
    res.send('Delete Category' + deleteCategory);
    console.log('Category successfully deleted')
}
let updateCategory = async (req, res) => {
    let { id } = req.params;
    let updateCategory = await Category.findByIdAndUpdate(id, req.body);
    res.send('Update Category' + updateCategory);
    console.log('Category Updated Successfully');
}

module.exports = { categoriesRender, CategoryCreate, getCategory, deleteCategory, updateCategory }