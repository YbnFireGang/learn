- `npm init -y` => 初始化npm配置
- `npm install koa -S` =>安装koa插件
- `npm install mysql -S` =>安装mysql数据库
- `npm install koa-static koa-router koa-ejs -S` =>安装koa相关的插件


> 文件目录
- config: 文件配置
- lib： 数据库相关的文件
- public: 样式，js
- views: 模板文件
- index.js: 启动文件


> 接口测试
- `npm install mocha supertest -D`

> MVC
>> 后端：

- M: 具体的业务逻辑 + 数据处理
- V: 视图
- C: 页面的整体控制

>> 前端
- View：只管页面的显示和样式展示。
- Control：进行页面节点事件的注册和控制，以及页面加载性能的实现。
- Model：真正的逻辑处理，例如jslib库中的form、popup、drag等功能组件都属于model模块。

