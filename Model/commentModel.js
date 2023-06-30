const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    
        refMax:{
            type: Object
            
        },
    
        citizenMeal: {
            type: Object
        
        },

        chickWizz:{
            type: Object
    
        },
        link:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Restaurant"
        }
    },{timestamps:true})
    
const commentModel = mongoose.model("comment",commentSchema)

module.exports = commentModel

