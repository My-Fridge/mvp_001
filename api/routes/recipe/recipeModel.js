const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipe_name:{
    type:String,
    require:true,
  },
  contains:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Produce',
    }
  ],

  description:{
    type:String,
    require:true,
  },
  rating: {
    type:Number,
    require:false,
  }
})

exports.model = mongoose.model('Recipe', recipeSchema, 'recipes')

