const mongoose = require('mongoose');
const schema = mongoose.Schema;

const recipeSchema = new schema({
    title: {
        type : String,
        required : true,
    },
    author: {
        type : String,
        required : true
    },
    url: {
        type : String,
        required : true
    },
    ingredients: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId , ref:'User1'
    }
})

const userModel = mongoose.model('recipe' , recipeSchema);
module.exports = userModel;