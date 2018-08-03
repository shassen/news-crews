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
        res.local.groups = group;
        next();
      })
      .catch(e => next(e));
  },

  getOne(req, res, next) {
    const groupName = req.body
    db.findByGroupName(groupName)
      .then((group) => {
        res.locals.groups = group
        next();
      })
      .catch(e => next(e));
  }

  create(req, res, next) {
    
  },

  update(req, res, next) {
    
  },

  destroy(req, res, next) {
    
  },

  showNewForm(req, res, next) {
    
  },

  showEditForm(req, res, next) {
    
  },

};
