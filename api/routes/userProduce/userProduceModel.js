const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProduceSchema = new Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  produce:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Produce',
      required:true,
 
  },
  expiry_notification:{
    type:Date,
    required:true,

  },
  ready_notification:{
    type:Date,
    required:true,
  },
  date_added:{
    type:Date,
    required:true,
    
  }
})

exports.model = mongoose.model('UserProduce', userProduceSchema);