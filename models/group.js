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

function save(group) {
  return db.one(`
        INSERT INTO groups (group_name, description)
        VALUES ($/group_name/, $/description/)
        RETURNING *`, group);
}

function destroy(id) {
  return db.one(`
        DELETE FROM groups
        WHERE id = $1`, id);
}

module.exports = {
  findAll,
  findById,
  save,
  destroy,
};
