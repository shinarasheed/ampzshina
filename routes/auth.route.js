const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const AuthValidator = require('../middlewares/validations/auth.validation');
const LoginValidator = require('../middlewares/validations/login.validation');
const verifyToken = require('../middlewares/auth.middleware');

router.post(
  '/signup',
  AuthValidator.validateData(),
  AuthValidator.ValidationResult,
  AuthController.registerUser
);
router.post(
  '/login',
  LoginValidator.validateData(),
  LoginValidator.ValidationResult,
  AuthController.loginUser
);
router.get('/', verifyToken, AuthController.getAuthUser);

module.exports = router;
