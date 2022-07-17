const mongoose = require("mongoose");

const { Schema } = mongoose;

// this the schema
const postSchema = new Schema({

    title: String,
    
    message: String,
    
    creator: String,
    
    tags: [String],

    // converting an image to a string using base64
    selectedFile: String,
    
    likeCount: {

        type: Number,
        
        default: 0

    },

    createdAt: {

        type:Date,

        default: new Date()
        
    }

});

// turning the schema into a model 
module.exports.PostMessage = mongoose.model("PostingOfMessage", postSchema);

