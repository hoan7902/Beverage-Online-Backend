const express = require('express');
const orderController = require('../controllers/OrderController');
const route = express.Router();
route.post('/add-order', orderController.addOrder);
route.post('/update-order', orderController.updateOrder);
route.post('/complete-order', orderController.completeOrder);
route.post('/get-list-order', orderController.getOrderWithStatus);
module.exports = route;
