import {configure, getLogger} from 'log4js';
import {join} from 'path';

//日志配置
configure({
  appenders: {
    ruleFile: {
      type: 'dateFile',
      filename: join(__dirname, '../log/server-'),
      pattern: 'yyyy-MM-dd.log',
      maxLogSize: 10 * 1000 * 1000,
      numBackups: 3,
      alwaysIncludePattern: true
    }
  },

  categories: {
    default: {appenders: ['ruleFile'], level: 'error'}
  }
});

const errorHandler = (app => {
  app.use(async (ctx, next) => {
    let {status} = ctx.response;
    if (status >= 400) {
      ctx.body = 'page not found';
      getLogger('ruleFile').error(ctx.request);
    }
    await next();
  });
});

export default errorHandler;