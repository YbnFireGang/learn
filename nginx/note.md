> nginx配置
- `apt install gcc` 安装ng相关依赖包
-  `wget http://nginx.org/download/nginx-1.4.5.tar.gz` 下载ng
- `tar -zxvf nginx-1.4.5.tar.gz` 解压ng
- `cd nginix-1.4.5/` 
- `./configure` 
- `make & make install` 编译ng
 
- 修改/lib/systemd/system/nginx.service
    ```
    Description=nginx - high performance web server  //描述服务
    After=network.target remote-fs.target nss-lookup.target   //描述服务类别
    
    [Service]//服务的一些具体运行参数的设置
    Type=forking  //后台运行的形式
    PIDFile=/usr/local/nginx/logs/nginx.pid   //PID文件的路径
    ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf //启动准备
    ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf//启动命令
    ExecReload=/usr/local/nginx/sbin/nginx -s reload //重启命令
    ExecStop=/usr/local/nginx/sbin/nginx -s stop  //停止命令
    ExecQuit=/usr/local/nginx/sbin/nginx -s quit //快速停止
    PrivateTmp=true  //给服务分配临时空间
    ```
- `systemctl daemon-reload` //在启动服务之前，需要先重载systemctl命令
- `systemctl start nginx.service`

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
    
> 免密登录

-  在.ssh文件中操作
- `ssh-keygen -t rsa -C 'yourname' -f 'yourname_rsa'`
- `ssh-copy-id -i pk root@xx.com`
- `vim config` =>新建config文件
    ```
    User root
    Host wuxianwei
    HostName 100.100.100.100
    Port 22
    StrictHostKeyChecking no
    IdentityFile ~/.ssh/wuxianwei
    IdentitiesOnly yes
    Protocol 2
    Compression yes
    ServerAliveInterval 60
    ServerAliveCountMax 20
    LogLevel INFO
    ```
- `ssh wuxianwei` 直接登录
