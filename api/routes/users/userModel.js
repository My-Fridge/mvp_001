const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
  email:{
    type: String,
    unique: true,
    require:true,
  },
  id:{
    type:UUID,
    unique:true,
  },
  password: {
    type:String,
    required:true,
    min: [6, ]
    
  },
})

userSchema.methods.comparePassword = function(password){
  return bcrypt.compare(password,this.password)
}

exports.model = mongoose.model('User', userSchema, 'users');