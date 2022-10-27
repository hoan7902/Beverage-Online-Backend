const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
router.post('/login-user', userController.loginUser);
router.post('/create-user', userController.createUser);
router.post('/change-user-information', userController.updateInforUser);
router.post('/change-user-password', userController.changePassword);
router.post('/get-detail-user', userController.getDetailUser);
router.post('/verify-user', userController.verifyPhoneNumber);
router.post('/forgot-password', userController.forgotPassword);

module.exports = router;
