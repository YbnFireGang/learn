import Koa from 'koa';
import router from './route/index';
import koaStatic from 'koa-static';
import {join} from 'path';

import errorHandler from './route/errorHandler';

const app = new Koa();

//配置静态文件路径
app.use(koaStatic(
  join(__dirname, '../build/webapp/')
));

//配置路由
app.use(router(app).routes());
//错误处理
errorHandler(app);

app.listen(3000);