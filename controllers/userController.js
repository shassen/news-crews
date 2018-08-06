
const db = require('../models/user');


module.exports = {
  // Middleware function to retrieve all user from the db.
  index(req, res, next) {
    db.findAll()
      .then((user) => {
        res.locals.users = user;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to retrieve one user from the db by param id.
  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((user) => {
        res.locals.user = user;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to handle the update of a users information in the db. Not used in app.
  update(req, res, next) {
    const { username } = req.body;

    const modifiedUser = {
      id: req.params.id,
      username,
    };

    db.update(modifiedUser)
      .then((user) => {
        res.locals.user = user;
        next();
      })
      .catch(e => next(e));
  },

};
