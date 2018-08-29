const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send({
    data: 'this is server'
  });
  res.end();
});
app.listen(8080);
exports = app;