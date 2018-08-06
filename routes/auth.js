
const express        = require('express');
const authController = require('../controllers/authController');

const authRouter     = express.Router();

// Routes below are referenced from John Master's Auth Lecture. Thanks John!
// Login route handles user logins. Generates error is PW or UN is incorrect.
authRouter.route('/login')
  .get(authController.renderLogin)
  .post(authController.handleLogin);

// Register route handles creation of new users. If UN is taken, user will
// Receive error indicating UN is taken.
authRouter.route('/register')
  .get(authController.renderRegister)
  .post(authController.handleRegister);

// Lougout route handles user logout. Not used in app.
authRouter.get('/logout', authController.handleLogout);

module.exports = authRouter;
