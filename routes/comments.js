const express           = require('express');

const authController    = require('../controllers/authController');
const commentController = require('../controllers/commentsController');
const viewController    = require('../controllers/resHandler');

// Initiate express router.
const commentRouter = express.Router();

// Users only function.
commentRouter.use(authController.usersOnly);

// Middleware function to show object as JSON.
const showJSON = (req, res) => {
  res.json(res.locals.comments);
};

// Route to edit and create comments.
commentRouter.get('/:id/edit');
commentRouter.get('/new', (req, res) => {
  res.render('comments/create');
});

// Route to see all comments and post new comments.
commentRouter.route('/')
  .post(commentController.create, viewController.handleComCreate, viewController.showGroups)
  .get(commentController.index, viewController.showComments, viewController.show404);


module.exports = commentRouter;
