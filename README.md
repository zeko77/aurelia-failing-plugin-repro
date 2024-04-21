# aurelia-failing-plugin-repro
Repro where deployed au plugin that uses DI fails.

App already uses plugin created and published by the AU-PLUGIN project.

## Prepare NGINX server for deployment

Use docker to run nginx with path:

```docker run --name mynginx --mount type=bind,source=D:\www,target=/usr/share/nginx/html,readonly -p 8089:80 -d nginx```

# Steps to reproduce
1. Go to app and do npm i
2. npm start (You shold see Hello-world from app and plugin)
3. npm run build
4. copy the contents of dist to D:\www and try to open it on localhost:8089
