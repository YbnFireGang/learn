"use strict";

var server = require('./config/server.config.js'); //koa 框架


var Koa = require('koa');

var app = new Koa(); //静态资源设置

var koaStatic = require("koa-static");

app.use(koaStatic(__dirname + "/")); //ejs 模板

var views = require('koa-views');

app.use(views(__dirname + '/views', {
  map: {
    html: 'ejs'
  }
})); //使用路由

var router = require('./controller/router');

app.use(router.routes()); //启动koa服务

var serve = app.listen(server.port);
module.exports = serve;