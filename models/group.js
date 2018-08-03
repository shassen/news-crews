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

function save(group) {
  return db.one(`
        INSERT INTO groups (name, description, created_by)
        VALUES ($/name/, $/description/, $/created_by/)
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
  findByGroupName,
  save,
  destroy,
};
