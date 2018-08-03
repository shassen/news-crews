
const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express();

// authRouter.route('/test')
//   .get(authController.getAll);

authRouter.route('/login')
  .get(authController.handleLogin)
  .post(authController.handleLogin);

authRouter.route('/register')
  .get(authController.handleRegister)
  .post(authController.handleRegister);

authRouter.get('/logout', authController.handleLogout);

module.exports = authRouter;
