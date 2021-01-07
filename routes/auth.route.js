const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const AuthValidator = require('../middlewares/validations/auth.validation');
const {
  userNameExist,
  emailExist,
  phoneNumberExist,
} = require('../utils/user.utils');
const verifyToken = require('../middlewares/auth.middleware');

router.post(
  '/signup',
  AuthValidator.validateData(),
  AuthValidator.ValidationResult,
  userNameExist,
  emailExist,
  phoneNumberExist,
  AuthController.registerUser
);

module.exports = router;
