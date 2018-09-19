> ngnix配置
- `apt install gcc` 安装ng相关依赖包
-  `wget http://nginx.org/download/nginx-1.4.5.tar.gz` 下载ng
- `tar -zxvf nginx-1.4.5.tar.gz` 解压ng
- `cd nginix-1.4.5/` 
- `./configure` 
- `make & make install` 编译ng
 
- `ps -ef | grep nginx` 查看ng的进程
- `lsof -i:xxxx` 查看端口号是否被暂用
- `nginx -s reopen` ng 启动
- `nginx -s reload` 修改nginx.conf。重新载命令
- `ngnix -c /usr/local/nginx/conf/ngnix.conf` 每次reopen会报错
- `nginx -s stop` ng 停止

>HTTP
- HTTP请求组成：请求行(method, url, 协议版本)，消息报头，请求正文
- HTTP响应组成：状态行(状态码，服务器协议版本)，消息报头，响应正文

- cookie: 保存在客户端。每次请求都会带上cookie给服务端。
- session： 保存在服务端。用户登录服务端通过set-cookie，将cookie设置到前端。  [HttpOnly,security]

- http2: 1. 二进制传输。 2. 报头压缩。 3. 并行请求。 4.服务器主动推送
- 反向代理用途：
    1. 安全
    2. 外网发布
    3. 压缩
    4. 负载均衡
    5. 加密
    6. SSL安全