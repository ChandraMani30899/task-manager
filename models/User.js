var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  Name : {type : String, required:true},
  email : {type : email , required:true},
  pass : {type : String, required:true}
})


module.exports = mongoose.model(User,UserSchema)