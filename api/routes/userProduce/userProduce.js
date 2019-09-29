const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProduce = new Schema({
  user_id:{
    type:String,
    require:true,
  },
  produce_id:{
    type:String,
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