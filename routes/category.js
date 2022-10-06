const express = require('express');
const categoryController = require('../controllers/CategoryController');
const route = express.Router();
route.post('/add-category', categoryController.addCategory);
route.post('/delete-category', categoryController.deleteCategory);
route.post('/update-category', categoryController.updateCategory);
route.get('/get-category', categoryController.getAll);
module.exports = route;
