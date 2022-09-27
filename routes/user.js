const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
router.post('/check-phone-number', userController.checkUser);
module.exports = router;
