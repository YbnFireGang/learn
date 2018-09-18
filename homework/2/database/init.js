const database = require('../config/database.config.js');

const mysql = require('mysql');
const pool = mysql.createPool({
  host: database.host,
  user: database.username,
  password: database.password,
  database: database.database,
});

module.exports={pool};