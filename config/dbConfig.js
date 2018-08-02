/*
Connection to database server exists in this file.
For this project I will include an object that could receive DB info
from a URL source as practice. However, the database is on my local machine
*/

module.exports = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'newscrews_db',
};
