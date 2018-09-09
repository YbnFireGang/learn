const {database} = require('../config/default.config.js');

const mysql = require('mysql');
const pool = mysql.createPool({
  host: database.host,
  user: database.username,
  password: database.password,
  database: database.database,
});

const query = (sql, values) =>
  new Promise((resolve, reject) =>
    pool.getConnection((err, connection) => {
      if (err) resolve(err);
      connection.query(sql, values, (err, rows) => {
        err ? reject(err) : resolve(rows);
        connection.release();
      })
    })
  );

module.exports = query;
