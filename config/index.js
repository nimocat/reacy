var path = require('path');

//  select environment 
var env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();

// load config file 
var file = path.resolve(__dirname, env);
try {
  var config = module.exports = require(file);
  console.log('load config: [%s] %s', env, file);
} catch (e) {
  console.error(`Cannot load config: ${env} ${file}`);
  throw e;
} 
