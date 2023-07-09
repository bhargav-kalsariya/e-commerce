const { Category } = require("../models/categorySchema")
const { Product } = require("../models/productSchema")

let productsPageRender = async (req, res) => {

    let products = await Product.find();
    res.render('products', { products });

}

let productCreate = async (req, res) => {

    await Product.create(req.body);
    res.redirect('/shop');

}

let getProduct = async (req, res) => {

    try {
        let categories = await Category.find();
        let products = await Product.find();
        res.render('shop', { products, categories });
    } catch (error) {
        console.log(error.message);
    }

}

let ProductsRender = async (req, res) => {

    try {
        let { product } = req.params;
        let products = await Product.findById(product);
        res.render('product-details', { products });
    } catch (error) {
        res.send(error);
    }

}

let getProductCategoryWise = async (req, res) => {

    const { category } = req.params;

    try {
        const products = await Product.find({ category });
        let categories = await Category.find();
        res.render('shop', { products, categories });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }

};


let AtoZproductsSorting = async (req, res) => {

    let AtoZproductsSorting = await Product.find().sort({ name: 1 }).toArray();
    res.render('shop', { AtoZproductsSorting })
}

let deleteProduct = async (req, res) => {

    let { product } = req.params;
    await Product.findByIdAndDelete(product);
    res.redirect('/shop');

}

let updateProduct = async (req, res) => {

    let { product } = req.params;
    try {
        const products = await Product.findById(product);
        res.render('updateproduct', { products });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).send('Internal Server Error');
    }

}
let postUpdatedProduct = async (req, res) => {

    let { product } = req.params;
    await Product.findByIdAndUpdate(product, req.body);
    res.redirect('/shop');

};

module.exports = { updateProduct, deleteProduct, getProduct, productCreate, productsPageRender, AtoZproductsSorting, getProductCategoryWise, postUpdatedProduct, ProductsRender }