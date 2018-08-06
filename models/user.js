// Require connection to database
const bcrypt = require('bcryptjs');
const db = require('../config/connection');

// Create SQL queries to display and manipulate data in app
// Register function is from John Master's Auth lesson. Thank you John!
function register(username, password) {
  return bcrypt.hash(password, 8)
    .then((hash) => {
      return db.one(`
        INSERT INTO users (username, password_digest)
        VALUES ($/username/, $/password_digest/)
        RETURNING *`, {
        username,
        password_digest: hash,
      });
    });
}

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

function findByUsername(username) {
  return db.one(`
    SELECT *
    FROM users
    WHERE username = $1
    `, username);
}

function update(name) {
  return db.one(`
    UPDATE users
    SET username = $/username/
    WHERE id = $/id/ RETURNING *`, name);
}

// Login function is from John Master's Auth lesson.
async function login(username, password) {
  try {
    const user = await findByUsername(username);
    const res = await bcrypt.compare(password, user.password_digest);
    if (!res) {
      throw new Error('bad password');
    }
    delete user.password_digest;
    return user;
  } catch (e) {
    throw new Error('Unauthorized');
  }
}

function destroy(id) {
  return db.none(`
        DELETE FROM users
        WHERE id = $1`, id);
}

module.exports = {
  register,
  findAll,
  findById,
  findByUsername,
  update,
  login,
  destroy,
};
