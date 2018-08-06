const express           = require('express');

// const authController = require('../controllers/authController');
const groupController   = require('../controllers/groupController');
const authController    = require('../controllers/authController');
const userController    = require('../controllers/userController');
const commentController = require('../controllers/commentsController');
const viewController    = require('../controllers/resHandler');

// Initiate express router.
const groupRouter = express.Router();

// Users only function
groupRouter.use(authController.usersOnly);

// groups/:id route displays group, all comments from group and new comment form.
groupRouter.route('/:id')
  .get(groupController.getOne, viewController.showComments,
    viewController.showCommForm, viewController.handleComCreate)
  .post(commentController.createNewComment, viewController.handleComCreate);

// groups route shows all groups, creates, updates and deletes groups if you are a user.
groupRouter.route('/')
  .post(groupController.createNewGroup, viewController.showGroups, viewController.show404)
  .delete(groupController.destroy, viewController.handleGroupDelete)
  .put(groupController.update, viewController.handleGroupUpdate)
  .get(groupController.index, viewController.showGroups, viewController.showAddGroupForm);

module.exports = groupRouter;
