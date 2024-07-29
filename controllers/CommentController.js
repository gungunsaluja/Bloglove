// import model
const Post = require("../models/postmodel");
const Comment = require("../models/commentModel");

// business logic
// 
exports.createComment = async(req,res)=>{
    try{

        // fetch data from req body
        const {post,user,body} = req.body;
        const comment = new Comment({
            post,user,body
        });
        // save the new comment into the database
            const savedComment = await comment.save();
            // find the post by id and add the new comment to its comments array
            const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id} },{new:true})
            .populate("comments") // populates the comments array with comment documents
            // push ek entry ko update krne ke liye kr re hote h and pull entry ko remove krne ke liye kr re hote h
            // new true ka mtlb hota h jo b return kro nya krna purana mt krna

            .exec();
            res.json({
                post:updatedPost,
            });

    }catch(err)
    {
        return res.status(500).json({
            error:"Error while creating comment",
        })

    }

}
