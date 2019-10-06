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

  },
  how_to_choose: {
    type:String,
    require:true,
  },
  ready_life: {
    type:Date,
    require:true,
  },
  current_state: {
    type:String,
    require:true,
  },
  recipes: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Recipe',
  }


  


})

exports.model = mongoose.model('Produce', produceSchema, 'produces');