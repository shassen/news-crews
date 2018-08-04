const db = require('../models/group');

module.exports = {

  createNewGroup(req, res, next) {
    const g = req.body;
    db.save({ ...g, created_by: req.user.id })
      .then((group) => {
        res.redirect('/group');
      })
      .catch(e => next(e));
  },

  index(req, res, next) {
    db.findAll()
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  getOne(req, res, next) {
    const groupName = req.body;
    db.findByGroupName(groupName)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  // create(req, res, next) {
    
  // },

  update(req, res, next) {
    const { name, description } = req.body;

    const modifiedGroup = {
      id: req.params.id,
      name,
      description
    };
    db.update(modifiedGroup)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  destroy(req, res, next) {
    db.destroy(req.params.id)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },

  showNewForm(req, res, next) {
    
  },

  showEditForm(req, res, next) {
    
  },

};
