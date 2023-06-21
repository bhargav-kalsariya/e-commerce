const { Product } = require("../models/productSchema")

let productsPageRender = (req, res) => {
    res.render('products')
}
let productCreate = async (req, res) => {
    let product = await Product.findOne({ name: req.body.name })
    if (!product) {
        let CreateProduct = await Product.create(req.body);
        console.log(CreateProduct)
        res.send(CreateProduct)
    }
    else {
        res.send('Product Already Created');
    }
}
let getProduct = async (req, res) => {
    let product = await Product.find();
    res.send(product);
}
let deleteProduct = async (req, res) => {
    let { id } = req.params;
    let deleteProduct = await Product.findByIdAndDelete(id);
    res.send('Delete Product' + deleteProduct);
    console.log('Product deleted successfully')
}
let updateProduct = async (req, res) => {
    let { id } = req.params;
    let updateProduct = await Product.findByIdAndUpdate(id, req.body)
    res.send('Update Product' + updateProduct);
    console.log('Product Updated successfully');
}

module.exports = { updateProduct, deleteProduct, getProduct, productCreate, productsPageRender }