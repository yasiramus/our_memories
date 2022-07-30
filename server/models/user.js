const mongoose = require("mongoose");

const { Schema } = mongoose;

// this the schema
const userSchema = new Schema({

    name: {

        type: String,
        
        required: true,

        trim:true
        
    },

    email: {

        type: String,
        
        required: true,
        
        trim:true
        
    },

    password: {

        type: String,
        
        required: true,

        trim:true
        
    }
 
});

// turning the schema into a model 
module.exports.User = mongoose.model("User", userSchema);

