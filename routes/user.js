const express = require('express');

// const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentsController');
const groupController = require('../controllers/groupController');
const viewController = require('../controllers/resHandler');

// Initiate express router.
const userRouter = express.Router();

// Users only function.
userRouter.use(authController.usersOnly);

// Show JSON function without ejs files created.
const showJSON = (req, res) => {
  res.json(res.locals.user);
};

// newscrews/:id route shows logged in user and allows user to update info in db. Not used in app.
userRouter.route('/:id')
  .get(userController.getOne, showJSON)
  .put(userController.update);

// newscrews route displays all users for testing purposes.
userRouter.route('/')
  .post(userController.index, showJSON)
  .get(userController.index, viewController.showUser, viewController.show404);

module.exports = userRouter;
