const express = require('express');
const productController = require('../controllers/ProductController');
const route = express.Router();
route.post('/add-product', productController.addProduct);
route.post('/update-product', productController.updateProduct);
route.post('/delete-product', productController.deleteProduct);
route.get('/get-product', productController.getProduct);
module.exports = route;
