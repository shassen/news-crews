// Export the connection to the database for data queries
const pgp = require('pg-promise')({
  query(q) {
    // show query in console
    console.log(q.query);
  },
});

// Require db configuration to establish connection.
const config = require('./dbConfig');

// establish connection to pg-promise and db.
const db = pgp(config);

module.exports = db;
