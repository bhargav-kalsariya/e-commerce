const { Category } = require("../models/categorySchema")
const { Product } = require("../models/productSchema")

let productsPageRender = (req, res) => {
    res.render('products')
}

let productCreate = async (req, res) => {
    let CreateProduct = await Product.create(req.body);
    console.log(CreateProduct);
    res.redirect('/shop');
}

let getProduct = async (req, res) => {
    // await Product.find().populate('category');
    try {
        let categories = await Category.find();
        let products = await Product.find();
        res.render('shop', { products, categories });
    } catch (error) {
        console.log(error.message);
    }
}
let getProductCategoryWise = async (req, res) => {

    const { category } = req.params;

    try {
        const products = await Product.find({ category });
        let categories = await Category.find();
        res.render('shop', { products, categories });
        // console.log(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
};


let AtoZproductsSorting = async (req, res) => {
    let AtoZproductsSorting = await Product.find({ order: [['name', 'ASC']] });
    res.render('shop', { AtoZproductsSorting })
}

let deleteProduct = async (req, res) => {
    let { product } = req.params;
    await Product.findByIdAndDelete(product);
    res.redirect('/shop');
}

let updateProduct = async (req, res) => {
    let { id } = req.params;
    let updateProduct = await Product.findByIdAndUpdate(id, req.body)
    res.send('Update Product ' + updateProduct);
    console.log('Product Updated successfully');
}

module.exports = { updateProduct, deleteProduct, getProduct, productCreate, productsPageRender, AtoZproductsSorting, getProductCategoryWise }