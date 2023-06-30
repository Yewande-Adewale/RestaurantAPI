const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({


branch:{type: String,required:[true,"branch is required"], unique:true},

address:{type: String,required:true},

    refMax:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],

    citizenMeal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"comment" 
    }],

    chickWizz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"comment" 
    }]

},{timestamps : true})

const restaurantModel = mongoose.model("Restaurant", restaurantSchema)

module.exports = restaurantModel