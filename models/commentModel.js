// import mongoose


const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    // konsi post par comment
    post:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to the post model
    },
    // kisne kiya
    user:{
        type:String,
        required:true,
    },
    // comment m h kya

    body:{
        type:String,
        required:true,

    }
});

// export
module.exports = mongoose.model("Comment",commentSchema);
// 
// comment ke andr 3 cheze hongi
// kis post par comment kiya h kis user ne comment kiya h
// kya comment kiya h and post apne aap me ek model h
