// Require connection to database
const db = require('../config/connection');

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

function save(comment) {
  return db.one(`
        INSERT INTO comments (author, content, url)
        VALUES ($/author/, $/content/, $/url/)
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
  save,
  destroy,
};
