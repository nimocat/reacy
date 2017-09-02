var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String 
});

var user = mongoose.model('User', userSchema);
