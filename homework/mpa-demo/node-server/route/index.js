const KoaRouter = require('koa-router');
import {configure, getLogger} from 'log4js';
import {join} from 'path';
import co from 'co';
import render from 'koa-swig';

const router = new KoaRouter();
//日志配置
configure({
  appenders: {pageNotFound: {type: 'file', filename: join(__dirname, '..', '/logs/pageNotFound.log')}},
  categories: {default: {appenders: ['pageNotFound'], level: 'error'}}
});


const route = (app) => {
  const logger = getLogger();

  //渲染配置
  app.context.render = co.wrap(render({
    root: join(__dirname, '..', '/webapp/view'),
    autoescape: true,
    cache: 'memory',
    ext: 'swig',
    writeBody: false
  }));


  //路由配置
  return router
    .get('/', async ctx => {
      ctx.body = await ctx.render('layout/index');
    })

    .get('*', async (ctx, next) => {
      let {status} = ctx;
      await next();
      if (status >= 400 && status < 500) {
        ctx.body = 'page not found';
        logger.error('page not found');
      }
    });
};


export default route;
