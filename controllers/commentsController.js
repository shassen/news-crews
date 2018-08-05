
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
        console.log(res.locals.comments);
        next();
      })
      .catch(e => next(e));
  },

  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((comment) => {
        res.locals.comments = comment;
        next();
      })
      .catch(e => next(e));
  },

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

  destroy(req, res, next) {
    const comment = req.params.id;
    db.destroy(comment)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },

  showNewForm(req, res, next) {
    
  },

  showEditForm(req, res, next) {

  },

}
