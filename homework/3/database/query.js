const {pool} = require('./init');

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
