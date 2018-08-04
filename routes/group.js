const express = require('express');

// const authController = require('../controllers/authController');
const groupController = require('../controllers/groupController');
const userController = require('../controllers/userController');
const viewController = require('../controllers/resHandler');

const groupRouter = express.Router();

const showJSON = (req, res) => {
  res.json(res.locals.group);
};

const handle404 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(404);
};

const send400 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(400);
};


groupRouter.get('/newscrews/group/:id/edit');
groupRouter.get('/new', (req, res) => {
  res.render('groups/create');
});

groupRouter.route('/:id')
  .get(groupController.getOne, showJSON)
  .put(groupController.update, showJSON)
  .delete(groupController.destroy, (req, res) => {
    res.sendStatus(200);
  });

groupRouter.route('/')
  .post(groupController.createNewGroup, showJSON)
  .get(groupController.index, showJSON);

groupRouter.use(handle404);
// groupRouter.use(send400);

module.exports = groupRouter;
// , viewController.showAll