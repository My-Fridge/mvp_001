const mongoose = require('mongoose');
const { Schema } = mongoose;

const groceryListSchema = new Schema({
  item :{
    type:Array,
    require: true,

  },
  name: {
    type: String,
    require: true,
  }
})

exports.model = mongoose.model('GroceryList', groceryListSchema, 'groceryLists');