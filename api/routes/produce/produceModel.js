const mongoose = require('mongoose');
const { Schema } = mongoose;

const produceSchema = new Schema({

  name: {
    type:String,
    require: true,
  }, 
  storing_info :{
    type:Object,
    require:true,

  },
  expiry_life: {
    type:Date,
    require:true,

  }


})

exports.model = mongoose.model('Produce', produceSchema, 'produces');