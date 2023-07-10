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

// sorting product //

let sortProducts = async (req, res) => {

    const categories = await Category.find();
    const products = await Product.find();

    let sortBy = req.query.sortBy;
    let sortedProducts = [...products];

    if (sortBy === 'alphabetically') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'lowToHigh') {
        sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
    }
    else if (sortBy === 'highToLow') {
        sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
    }
    else if (sortBy === 'newness') {
        sortedProducts.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
    }
    res.render('sorted-shop', { sortedProducts, categories });

};


module.exports = { updateProduct, deleteProduct, getProduct, productCreate, productsPageRender, getProductCategoryWise, postUpdatedProduct, ProductsRender, sortProducts };