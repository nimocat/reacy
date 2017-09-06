var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, default: 0 },
  avatar: { type: String }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
