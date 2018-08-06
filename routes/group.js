const express = require('express');

// const authController = require('../controllers/authController');
const groupController = require('../controllers/groupController');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const viewController = require('../controllers/resHandler');

const groupRouter = express.Router();

groupRouter.use(authController.usersOnly);

// const showJSON = (req, res) => {
//   res.json(res.locals.group);
// };

// const handle404 = (err, req, res, next) => {
//   console.error(err);
//   res.sendStatus(404);
// };

// const send400 = (err, req, res, next) => {
//   console.error(err);
//   res.sendStatus(400);
// };


// groupRouter.get('/newscrews/group/:id/edit');
// groupRouter.get('/new', viewController.showAddForm, viewController.show404);

groupRouter.route('/:id')
  .get(groupController.getOne, viewController.showGroups);
  // .put(groupController.update)
  // .delete(viewController.handleDelete, groupController.destroy);

groupRouter.route('/')
  .post(groupController.createNewGroup, viewController.showGroups, viewController.show404)
  .delete(groupController.destroy, viewController.handleGroupDelete)
  .put(groupController.update, viewController.handleGroupUpdate)
  .get(groupController.index, viewController.showGroups, viewController.showAddGroupForm);

// groupRouter.use(handle404);


module.exports = groupRouter;
// groupController.destroy, (req, res) => {
//   res.sendStatus(200);groupController.getGroup, 