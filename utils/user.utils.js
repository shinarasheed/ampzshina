const User = require('../model/user.model');

userNameExist = async (req, res, next) => {
  const { userName } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (user) {
      return res
        .status(400)
        .json({ status: 'error', error: 'username already exist' });
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};

emailExist = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ status: 'error', error: 'email already exist' });
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};

phoneNumberExist = async (req, res, next) => {
  const { phoneNumber } = req.body;
  try {
    const user = await User.findOne({ phoneNumber });
    if (user) {
      return res
        .status(400)
        .json({ status: 'error', error: 'phone number already exist' });
    }

    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  userNameExist,
  emailExist,
  phoneNumberExist,
};
