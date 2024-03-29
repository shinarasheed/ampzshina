const User = require('../model/user.model');

/**
 *Contains Auth Controller
 *
 * @class AuthController
 */
class AuthController {
  /* eslint camelcase: 0 */

  /**
   * Register User.
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @memberof AuthController
   * @returns {JSON} - A JSON success response.
   */
  static async registerUser(req, res) {
    try {
      const user = await User.create(req.body);
      const token = user.generateAuthToken();
      res.status(201).json({ status: 'success', token });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ status: 'error', error: 'server error' });
    }
  }

  /**
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @memberof AuthController
   * @returns {JSON} - A JSON success response.
   */
  static async loginUser(req, res) {
    const { email, userName, password } = req.body;
    try {
      //compare email or username
      const user = await User.findOne({
        $or: [{ email }, { userName }],
      });
      if (!user) {
        return res
          .status(400)
          .json({ status: 'error', error: 'invalid credential' });
      }
      //compare passwords
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ status: 'error', error: 'invalid credential' });
      }

      const token = user.generateAuthToken();
      res.status(201).json({ status: 'success', token });
    } catch (error) {}
  }

  /**
   * Get AUthenticated User.
   * @param {Request} req - Response object.
   * @param {Response} res - The payload.
   * @memberof AuthController
   * @returns {JSON} - A JSON success response.
   */
  static async getAuthUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.user }).select('-password');
      res.status(200).json({ status: 'success', data: user });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: 'error', error: 'server error' });
    }
  }
}

module.exports = AuthController;
