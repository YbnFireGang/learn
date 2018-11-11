import KoaRouter from 'koa-router';

import {join} from 'path';
import co from 'co';
import render from 'koa-swig';

const router = new KoaRouter();
const route = (app) => {
  //渲染配置
  app.context.render = co.wrap(render({
    root: join(__dirname, '../../build/webapp/view/'),
    autoescape: true,
    cache: 'memory',
    ext: 'swig',
    writeBody: false
  }));

  //路由配置
  return router
    .get('/', async (ctx, next) => {
      ctx.body = await ctx.render('home');
      await next();
    })

    .get('/about', async (ctx, next) => {
      ctx.body = await ctx.render('about');
      await next();
    });
};


export default route;
