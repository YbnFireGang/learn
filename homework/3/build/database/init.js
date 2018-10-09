"use strict";

var database = require('../config/database.config.js');

var mysql = require('mysql');

var pool = mysql.createPool({
  host: database.host,
  user: database.username,
  password: database.password,
  database: database.database
});
module.exports = {
  pool: pool
};