var mongoose = require('mongoose');
var mongoose.connection;
const defaultHosts = '127.0.0.1:2017';
const dbName = 'reacy';

db.on('error', function(err) {
  console.log('Failed to connect to DB');
});

db.on('disconnected', function() {
  console.log('Mongoose default disconnected to DB');
});

mongoose.connect(`mongodb://localhost${defaultHosts}/${dbName}`);
