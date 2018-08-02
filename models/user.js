// Require connection to database
const db = require('../config/connection');

function findAll() {
  return db.many(`
        SELECT *
        FROM users`);
}

function findById(id) {
  return db.one(`
        SELECT *
        FROM users
        WHERE id = $1`, id);
}

function save(user) {
  return db.one(`
        INSERT INTO users (username, password, f_name, l_name, email)
        VALUES ($/username/, $/password/, $/f_name/, $/l_name/, $/email/);
        RETURNING *`, user);
}

function destroy(id) {
  return db.one(`
        DELETE FROM users
        WHERE id = $1`, id);
}

module.exports = {
  findAll,
  findById,
  save,
  destroy,
};
