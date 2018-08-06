// Require connection to database
const db = require('../config/connection');

// Create SQL queries to display and manipulate data in app
function findAll() {
  return db.many(`
        SELECT *
        FROM comments`);
}

function findByName(name) {
  return db.many(`
        SELECT *
        FROM comments
        WHERE author = $1`, name);
}

function findComsByGroupId(id) {
  return db.many(`
        SELECT *
        FROM comments c
        JOIN groups g ON g.id = c.group_id
        WHERE g.id = $1`, id);
}

function save(comment) {
  return db.one(`
        INSERT INTO comments (author, content, url, group_id)
        VALUES ($/author/, $/content/, $/url/, $/group_id/)
        RETURNING *`, comment);
}

function destroy(id) {
  return db.one(`
        DELETE FROM comments
        WHERE id = $1`, id);
}

module.exports = {
  findAll,
  findByName,
  findComsByGroupId,
  save,
  destroy,
};
