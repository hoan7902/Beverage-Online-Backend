const express = require('express');
const categoryController = require('../controllers/CategoryController');
const route = express.Router();
route.post('/add-catetogory', categoryController.addCategory);
module.exports = route;
