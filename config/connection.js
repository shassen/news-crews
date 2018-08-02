// Export the connection to the database for data queries
const pgp = require('pg-promise');
const config = require('./dbConfig');

const db = pgp(config);

module.exports = db;
