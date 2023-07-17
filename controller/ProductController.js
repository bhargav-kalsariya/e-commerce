const { Category } = require("../models/categorySchema");
const { Product } = require("../models/productSchema");
const SignupModel = require("../models/singupSchema");

let productsPageRender = async (req, res) => {

    try {

        let products = await Product.find();
        res.render('products', { products });

    } catch (error) {

        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let productCreate = async (req, res) => {

    try {

        let { name, description, price, dateCreated, category, countInStock, rating, isFeatured } = req.body;
        let productsImages = req.file.filename;
        let products = new Product({
            image: productsImages, name, description, price, dateCreated, category, countInStock, rating, isFeatured
        });

        await products.save();
        res.redirect('/shop');

    } catch (error) {

        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let getProduct = async (req, res) => {

    try {

        let sortBy = req.query.sortBy;
        let categories = await Category.find();
        let products = await Product.find();

        if (sortBy === 'alphabetically') {

            products.sort((a, b) => a.name.localeCompare(b.name));

        }
        else if (sortBy === 'lowToHigh') {

            products.sort((a, b) => Number(a.price) - Number(b.price));

        }
        else if (sortBy === 'highToLow') {

            products.sort((a, b) => Number(b.price) - Number(a.price));

        }
        else if (sortBy === 'newness') {

            products.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));

        };

        res.render('shop', { products, categories });

    } catch (error) {

        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let ProductsRender = async (req, res) => {

    let { product } = req.params;

    try {

        let products = await Product.findById(product);
        res.render('product-details', { products });

    } catch (error) {

        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let FeaturedProductsRender = async (req, res) => {

    try {

        let products = await Product.find({ isFeatured: true });
        let categories = await Category.find();

        res.render('shop', { products, categories });

    } catch (error) {

        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let getProductCategoryWise = async (req, res) => {

    const { category } = req.params;

    try {

        let products = await Product.find({ category });
        let categories = await Category.find();

        res.render('shop', { products, categories });

    } catch (error) {

        console.error('Error fetching products:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let deleteProduct = async (req, res) => {

    let { product } = req.params;

    try {

        await Product.findByIdAndDelete(product);
        res.redirect('/shop');

    } catch (error) {

        console.error('Error fetching product:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let updateProduct = async (req, res) => {

    let { product } = req.params;

    try {

        let products = await Product.findById(product);
        res.render('updateproduct', { products });

    } catch (error) {

        console.error('Error fetching product:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let postUpdatedProduct = async (req, res) => {

    let { product } = req.params;

    try {

        let { name, description, price, dateCreated, category, countInStock, rating, isFeatured } = req.body;
        let productsImages = req.file.filename;
        let products = ({ image: productsImages, name, description, price, dateCreated, category, countInStock, rating, isFeatured });

        await Product.findByIdAndUpdate(product, products);
        res.redirect('/shop');

    } catch (error) {

        console.error('Error fetching product:', error.message);
        res.status(500).send('Internal Server Error');

    };

};

let cartpagerander = async (req, res) => {

    let { product } = req.params;

    try {

        let cartproduct = await Product.findById(product);
        let data = req.user.cart;
        let user = req.user;

        if (data == undefined || data.length == 0 || data == null) {

            data.push(cartproduct);
            await user.save();
            res.render('cart', { data });

        } else {

            let isProductNew = true;

            for (let ele of data) {

                if (ele._id == product) {

                    console.log(ele._id, product);
                    isProductNew = false;
                    break;

                };

            };

            if (isProductNew) {
                data.push(cartproduct);
                await user.save();
            };

            res.render('cart', { data });
            console.log(data);

        };

    } catch (error) {

        console.error('Error fetching product:', error.message);
        return res.status(500).send('Internal Server Error');

    };

};


module.exports = { updateProduct, deleteProduct, getProduct, productCreate, productsPageRender, getProductCategoryWise, postUpdatedProduct, ProductsRender, FeaturedProductsRender, cartpagerander };