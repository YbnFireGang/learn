const server = require('./config/server.config.js');


//koa 框架
const Koa = require('koa');
const app = new Koa();

//静态资源设置
const koaStatic = require("koa-static");
app.use(koaStatic(__dirname + "../public"));

//ejs 模板
const views = require('koa-views');

app.use(views(__dirname + '/views', {
  map: {html: 'ejs'}
}));

//使用路由
const router = require('./controller/router');
app.use(router.routes());

//启动koa服务
let serve = app.listen(server.port);
module.exports = serve;