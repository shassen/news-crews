
const db = require('../models/comment');

module.exports = {

  // Middleware function to create new comments using req.body.
  createNewComment(req, res, next) {
    db.save({ ...req.body })
      .then((comment) => {
        res.redirect('/');
      })
      .catch(e => next(e));
  },
  
  // Middleware function to retrieve all comments from db.
  index(req, res, next) {
    db.findAll()
      .then((comments) => {
        res.locals.comments = comments;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to retrieve comments within a specific group
  // using the group id.
  getGroupComments(req, res, next) {
    db.findComsByGroupId(req.params.id)
      .then((comment) => {
        res.locals.comments = comment;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to create a new comment. Wasn't able to get this far in project.
  create(req, res, next) {
    const { author } = req.params.id;
    const { content, url } = req.body;
    db.save({ author, content, url })
      .then((newComment) => {
        res.locals.comments = newComment;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware to delete a comment based on the comment id.
  destroy(req, res, next) {
    const comment = req.params.id;
    db.destroy(comment)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },

};
