
const db = require('../models/comment');

module.exports = {

  createNewComment(req, res, next) {
    db.save({ ...req.body, })
      .then((comment) => {
        res.redirect('/...');
      })
      .catch(e => next(e));
  },

  index(req, res, next) {
    db.findAll()
      .then((comments) => {
        res.locals.comments = comments;
        next();
      })
      .catch(e => next(e));
  },

  create(req, res, next) {
    const { content, author } = req.body;
    db.save({ content, author })
      .then((newComment) => {
        res.locals.comment = newComment;
        next();
      })
      .catch(e => next(e));
  },

  destroy(req, res, next) {
    const comment = req.params.id;
    db.destroy(comment)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },

}
