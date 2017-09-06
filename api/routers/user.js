const router = require('koa-router')();
const userManager = require('../managers/userManager');

module.exports = router.get('/', userManager.indexPage)
