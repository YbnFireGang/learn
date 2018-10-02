const koaRouter = require('koa-router');
const router = new koaRouter();
const model = require('../model/index');
const {api, page} = model;
router
  .get('/index/index', async ctx => {
    await page.index(ctx);
  })
  .get('/get-favorite', async ctx =>
    await api.getFavorite(ctx)
  )
  .post('/add-favorite', async ctx => {
    await api.addFavorite(ctx);
  })
  .get('/*', ctx => {
    page.noFound(ctx);
  });

module.exports = router;