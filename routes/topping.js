const express = require('express');
const toppingController = require('../controllers/ToppingController');
const route = express.Router();
route.post('/add-topping', toppingController.addTopping);
route.post('/update-topping', toppingController.updateTopping);
route.post('/delete-topping', toppingController.deleteTopping);
module.exports = route;
