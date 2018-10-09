"use strict";

var _require = require('./init'),
    pool = _require.pool;

var query = function query(sql, values) {
  return new Promise(function (resolve, reject) {
    return pool.getConnection(function (err, connection) {
      if (err) resolve(err);
      connection.query(sql, values, function (err, rows) {
        err ? reject(err) : resolve(rows);
        connection.release();
      });
    });
  });
};

module.exports = query;