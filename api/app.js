const path = require('path');
const Koa = require('koa');
const config = require('../config');
const routers = require('./routers/index');
const app = new Koa();

app.use(routers.routes()).use(routers.allowedMethods());
console.log(`listen on port ${config.port}`);

app.listen(config.port);
