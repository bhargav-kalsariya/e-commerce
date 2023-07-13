const { Category } = require("../models/categorySchema");

let categoriesRender = (req, res) => {

    res.render('category');

};

let CategoryCreate = async (req, res) => {

    let categories = await Category.findOne({ name: req.body.name });

    if (!categories) {

        await Category.create(req.body);
        res.redirect('/shop');
    }
    else {
        res.send('category already exists');

    };

};

let getCategory = async (req, res) => {

    try {

        const categories = await Category.find();
        res.send(categories);

    } catch (error) {

        console.error('Error fetching categories:', error);
        res.status(500).send('Internal Server Error');

    };

};

let deleteCategory = async (req, res) => {

    let { id } = req.params;

    try {

        await Category.findByIdAndDelete(id);
        res.redirect('/shop');

    } catch (error) {

        console.error('Error fetching categories:', error);
        res.status(500).send('Internal Server Error');

    };

};

let updateCategory = async (req, res) => {

    let { id } = req.params;

    try {

        await Category.findByIdAndUpdate(id, req.body);
        res.redirect('/shop');

    } catch (error) {

        console.error('Error fetching categories:', error);
        res.status(500).send('Internal Server Error');

    };

};

module.exports = { categoriesRender, CategoryCreate, getCategory, deleteCategory, updateCategory };