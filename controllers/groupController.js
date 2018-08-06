const db = require('../models/group');

module.exports = {

  // Middleware function to create new groups.
  createNewGroup(req, res, next) {
    const g = req.body;
    db.create({ ...g })
      .then((group) => {
        res.redirect('/groups');
      })
      .catch(e => next(e));
  },

  // Middleware function to retrieve all groups from db.
  index(req, res, next) {
    db.findAll()
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to retrieve a specific group from the db using group id.
  getOne(req, res, next) {
    const groupId = req.params.id;
    db.findGroupComs(groupId)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to retrieve group from db using group name.
  getGroup(req, res, next) {
    const { name } = req.body;
    db.findByGroupName(name)
      .then((group) => {
        res.locals.group = group;
        next();
      })
      .catch(e => next(e));
  },

  // Middleware function to update groups in db.
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

  // Middleware function to delete groups from db.
  destroy(req, res, next) {
    const { name } = req.body;
    db.destroy(name)
      .then(() => {
        next();
      })
      .catch(e => next(e));
  },

};
