// Require connection to database
const db = require('../config/connection');

function findAll() {
  return db.many(`
        SELECT *
        FROM comments`);
}

function findById(id) {
  return db.one(`
        SELECT *
        FROM comments
        WHERE id = $1`, id);
}

function save(comment) {
  return db.one(`
        INSERT INTO comments (content, url)
        VALUES ($/content/, $/url/)
        RETURNING *`, comment);
}

function destroy(id) {
  return db.one(`
        DELETE FROM comments
        WHERE id = $1`, id);
}

module.exports = {
  findAll,
  findById,
  save,
  destroy,
};
