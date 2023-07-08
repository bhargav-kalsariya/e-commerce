const { Category } = require("../models/categorySchema");

let categoriesRender = (req, res) => {
    res.render('category');
}

let CategoryCreate = async (req, res) => {
    let categories = await Category.findOne({ name: req.body.name });
    if (!categories) {
        await Category.create(req.body);
        res.redirect('/shop');
    }
    else {
        res.send('category already exists')
    }
}

let getCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send('Internal Server Error');
    }
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