const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
router.post('/login-user', userController.loginUser);
router.post('/change-user-information', userController.updateInforUser);
router.post('/change-user-password', userController.changePassword);
router.post('/get-detail-user', userController.getDetailUser);

module.exports = router;
