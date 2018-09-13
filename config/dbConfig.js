/*
Connection to database server exists in this file.
For this project I will include an object that could receive DB info
from a URL source as practice. However, the database is on my local machine
*/

module.exports = process.env.DATABASE_URL || {
  host:     'localhost',
  port:     5432,
  database: 'newscrews_db',
};
