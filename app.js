const Koa = require('koa');
const config = require('./config');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

console.log(`listten on port ${config.port}`)

app.listen(config.port);
