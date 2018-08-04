// Require connection to database
const db = require('../config/connection');

function findAll() {
  return db.many(`
        SELECT *
        FROM groups`);
}

function findById(id) {
  return db.one(`
        SELECT *
        FROM groups
        WHERE id = $1`, id);
}

function findByGroupName(name) {
  return db.many(`
        SELECT *
        FROM groups
        WHERE name
        LIKE "%$/name/%"`, name);
}

function create(group) {
  return db.one(`
        INSERT INTO groups (name, description, created_by)
        VALUES ($/name/, $/description/, $/created_by/)
        RETURNING *`, group);
}

function addUserToGroup(userId, groupId) {
  return db.none(`
        INSERT INTO user_group (user_id, group_id)
        VALUES ($1, $2)`, [userId, groupId]);
}

function removeUserFromGroup(userId, groupId) {
  return db.none(`
        DELETE FROM user_group
        WHERE user_id = $1
        AND group_id = $2
        `, [userId, groupId]);
}

function destroy(id) {
  return db.one(`
        DELETE FROM groups
        WHERE id = $1`, id);
}

module.exports = {
  findAll,
  findById,
  findByGroupName,
  create,
  addUserToGroup,
  removeUserFromGroup,
  destroy,
};
