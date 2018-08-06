const express = require('express');

// const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentsController');
const groupController = require('../controllers/groupController');
const viewController = require('../controllers/resHandler');

const userRouter = express.Router();

userRouter.use(authController.usersOnly);

const showJSON = (req, res) => {
  res.json(res.locals.user);
};


const handle404 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(404);
};

const send400 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(400);
};

userRouter.route('/:id')
  .get(userController.getOne, showJSON)
  .put(userController.update);
  // userController.showEditForm
userRouter.route('/')
  .post(userController.index, showJSON)
  .get(userController.index, viewController.showUser, viewController.show404);

userRouter.use(handle404);
// userRouter.use(send400);

module.exports = userRouter;
// viewController.index, viewController.showAll