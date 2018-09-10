const {server} = require('./config/default.config.js');
const querySQL = require('./lib/index');
const query = require('./lib/database.query');

//koa 框架
const Koa = require('koa');
const app = new Koa();

//静态资源设置
const koaStatic = require("koa-static");
app.use(koaStatic(__dirname + "/public"));

//ejs 模板
const views = require('koa-views');
app.use(views(__dirname + '/views', {
  map: {html: 'ejs'}
}));

//koa 路由
const koaRouter = require('koa-router');
const router = new koaRouter();
router
  .get('/index', async ctx => {
    await ctx.render('index');
  })
  .get('/get-favorite', async ctx =>
    await query(querySQL.getFavorite)
      .then(result => {
        ctx.body = {
          code: 1,
          data: result[0].favorite
        };
      })
  )

  .post('/add-favorite', async ctx => {
    await query(querySQL.addFavorite)
      .then(async result => {
        await query(querySQL.getFavorite)
          .then(result => {
            ctx.body = {
              code: 1,
              data: result[0].favorite
            }
          })
      })
  })

  .get('/*', ctx => {
    ctx.status = 404;
    ctx.body = 'file not find';
  });

app.use(router.routes());

//启动koa服务
let serve = app.listen(server.port);

module.exports = serve;