// Require connection to database
const db = require('../config/connection');

// Create SQL queries to display and manipulate data in app
function findAll() {
  return db.many(`
        SELECT *
        FROM groups
        ORDER BY id ASC`);
}

function findById(id) {
  return db.one(`
        SELECT *
        FROM groups
        WHERE id = $1`, id);
}

function findGroupComs(id) {
  return db.many(`
        SELECT *
        FROM groups g
        JOIN comments c ON g.id = c.group_id
        WHERE g.id = $1`, id);
}

function findByGroupName(name) {
  return db.one(`
        SELECT *
        FROM groups
        WHERE name = $1`, name);
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

function updateGroup(group) {
  return db.one(`
        UPDATE groups
          SET 
            name = $/name/,
            description = $/description/
        WHERE id = $/id/
        RETURNING *`, group);
}

function destroy(name) {
  return db.none(`
        DELETE FROM groups
        WHERE name = $1`, name);
}

module.exports = {
  findAll,
  findById,
  findGroupComs,
  findByGroupName,
  create,
  addUserToGroup,
  removeUserFromGroup,
  updateGroup,
  destroy,
};
