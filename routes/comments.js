const express = require('express');

const authController = require('../controllers/authController');
const commentController = require('../controllers/commentsController');
const viewController = require('../controllers/resHandler');

const commentRouter = express.Router();

const showJSON = (req, res) => {
  res.json(res.locals.comments);
};

const handle404 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(404);
};

const send400 = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(400);
};


commentRouter.get('/:id/edit');
commentRouter.get('/new', (req, res) => {
  res.render('comments/create');
});

commentRouter.route('/:id')
  // .get(commentController.getOne, showJSON)
  // .put(commentController.update, showJSON)
  .delete(commentController.destroy, (req, res) => {
    res.sendStatus(200);
  });

commentRouter.route('/')
  .post(commentController.create, showJSON)
  .get(commentController.index, showJSON);

commentRouter.use(handle404);

module.exports = commentRouter;
// , viewController.index