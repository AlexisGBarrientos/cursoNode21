const { get } = require('../routes/products');
const { getAll } = require('./../Models/Product')

const allProduct = (req, res, next) => {
    const products = getAll();
    res.json(products);
};

const findProduct = (req, res, next) => {
    const products = getAll();
    const { id } = req.params;
    const product = products.find((product) => product.id === parseInt(id));
    res.json(product); 
}

const createProduct = (req, res, next) => {
    const {
        title,
        price,
        condition,
        description,
    } = req.body;
    res.status(201).json({message: "Producto creado exitosamente"});
};

const updateProduct = (req, res, next) => {};

const deleteProduct = (req, res, next) => {};

module.exports = {allProduct, findProduct, createProduct }