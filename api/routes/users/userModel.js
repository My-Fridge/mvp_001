const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
  
  first_name: {
    type: String,
    required: true,

  },
  last_name: {
    type:String,
    required:true,
  },
  email:{
    type: String,
    unique: true,
    require:true,
  },
  password: {
    type:String,
    required:true,
    min: [6, ]
  },
  display_name:{
    type:String,
    required: true,
    unique:true,
  },
  city:{
    type:String,
    required:true,
    enum:["Toronto"]
  },
  grocery_list:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'GroceryList'
  },
  user_produce:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'UserProduce'
  }

})

userSchema.pre("save", async function(next){
  const user = this;
  if(user.isModified('password') || user.isNew){
    try {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      return next();
    }catch(e){
    return next(e);
  }
}else {
  return next();
}
})

userSchema.methods.comparePassword = function(password){
  console.log(this.password, password);
  return bcrypt.compare(password,this.password)
}

userSchema.methods.findOne(email, function findUserWithEmail(email){
  const user = User
})
exports.model = mongoose.model('User', userSchema, 'users');