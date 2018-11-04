import Koa from 'koa';
import router from './route/index';

//服务
const app = new Koa();

//配置路由
app.use(router(app).routes());

app.listen(3000);