"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_koa=_interopRequireDefault(require("koa")),_index=_interopRequireDefault(require("./route/index")),_koaStatic=_interopRequireDefault(require("koa-static")),_path=require("path"),_errorHandler=_interopRequireDefault(require("./route/errorHandler")),app=new _koa.default;app.use((0,_koaStatic.default)((0,_path.join)(__dirname,"../build/webapp/"))),app.use((0,_index.default)(app).routes()),(0,_errorHandler.default)(app),app.listen(3e3);