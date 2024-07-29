
// like ka alg se model bna se jha pr lika h kisne ike liya h kha pr kiya h

const mongoose = require("mongoose");
const { comment } = require("postcss");

// route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },  
    body:{
        type:String,
        required:true,
    }
    ,likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{

        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",

    }]
});


// exports
module.exports = mongoose.model("Post",postSchema);
