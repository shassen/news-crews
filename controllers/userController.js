
const db = require('../models/user');


module.exports = {

  index(req, res, next) {
    db.findAll()
      .then((user) => {
        res.locals.users = user;
        next();
      })
      .catch(e => next(e));
  },

  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((user) => {
        res.locals.user = user;
        next();
      })
      .catch(e => next(e));
  },

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

  showEditForm(req, res, next) {
    
  },


};
