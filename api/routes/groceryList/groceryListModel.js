const mongoose = require('mongoose');
const { Schema } = mongoose;

const groceryListSchema = new Schema({
  item :[{

      type:mongoose.Schema.Types.objectId,
      ref:'Produce',
  }],
  name: {
    type: String,
    require: true,
  },
  user_id:{
    type:mongoose.Schema.Types.objectId,
    ref:'User'
  }
})

exports.model = mongoose.model('GroceryList', groceryListSchema, 'groceryLists');