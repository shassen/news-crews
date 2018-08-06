const db = require('../models/group');

module.exports = {

  createNewGroup(req, res, next) {
    const g = req.body;
    db.create({ ...g })
      .then((group) => {
        res.redirect('/groups');
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
    const groupId = req.params.id;
    db.findById(groupId)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  getGroup(req, res, next) {
    const { name } = req.body;
    db.findByGroupName(name)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  update(req, res, next) {
    const { id, name, description } = req.body;
    const modifiedGroup = {
      id,
      name,
      description,
    };
    db.updateGroup(modifiedGroup)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  destroy(req, res, next) {
    const { name } = req.body;
    db.destroy(name)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },

};
