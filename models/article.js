// Require connection to database
const db = require('../config/connection');

function findAll() {
  return db.many(`
        SELECT *
        FROM articles`);
}

function findById(id) {
  return db.one(`
        SELECT *
        FROM articles
        WHERE id = $1`, id);
}

function save(article) {
  return db.one(`
        INSERT INTO articles (url, source)
        VALUES ($/url/, $/source.name/)
        RETURNING *`, article);
}

function destroy(id) {
  return db.one(`
        DELETE FROM articles
        WHERE id = $1`, id);
}

module.exports = {
  findAll,
  findById,
  save,
  destroy,
};
