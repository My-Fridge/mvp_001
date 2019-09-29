const {model:User} = require("./userModel");

exports.createUser = async userData => {
  try {
    const user = new User(userData);
    return await user.save();

  } catch(e){
    throw e;
  }
}

exports.isUser = async({email, password}) => {
  try {
    const [user] = await User.find({email});
    console.log("user on line 16 userServices", user)
    if(user){
      const match = await user.comparePassword(password);
      console.log("match line 19", match)
      if(match){
        return user;
      }
    }
  } catch(e){
    throw e;
  }
}

    