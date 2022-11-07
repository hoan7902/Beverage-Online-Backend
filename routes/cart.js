const express = require('express');
const cartController = require('../controllers/CartController');
const route = express.Router();
route.post('/add-to-cart', cartController.addToCart);
route.delete('/remove-from-cart', cartController.removeFromCart);
route.get('/get-all-cart', cartController.getAllCart);
module.exports = route;
