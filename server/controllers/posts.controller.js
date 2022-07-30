// mongoose importation
const mongoose = require("mongoose");

// post message model importation 
const { PostMessage } = require("../models/postMessage");

// all routes handlers

// fetching all data 
module.exports.getPosts = async (req, res) => {

    try {
        
        // the find method get the list of all documment 
        const getPostMessages = await PostMessage.find();

        res.status(200).json(getPostMessages)

    } catch (error) {
        
        console.log(error);

        res.status(404).json({ message: error.message })

    }

};

// creation of post content 
module.exports.createPost = async (req, res) => {

    try {
        
        const newPost = new PostMessage(req.body);

        await newPost.save();

        // returning only the id 
        res.status(201).json(newPost.id)

    } catch (error) {
        
        console.log(error);

        res.status(409).json({ message: error.message })

    }

};

// updating the content of the post using their individual ids
module.exports.updatePost = async (req, res) => {

  try {
    
        // destructing the id in an object form 
        const { id } = req.params;
        
        //here we are going to update the contents 
        const posts = req.body; //contains to all the data 

        // checking to see if the id is not a valid mongoose object id 
        // the isValid Checks if the value is a valid json ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            
            res.status(404).send("No post with this particular id")

        } else {
            
            // if the id is valid the post should now be updated 
            const updatedPost = await PostMessage.findByIdAndUpdate(id, posts, { new: true })

            res.status(201).json(updatedPost)

        }
      
    } catch (error) {
    
      console.log(error)
      
      res.status(500).json(error)
      
    }

};

// deleting a post using their id 
module.exports.deletePost = async (req, res) => {

    try {
        
        const { id } = req.params;

        // checking to see if the id is not a valid mongoose object id 
        // the isValid Checks if the value is a valid json ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            
            res.status(404).send("No post with this particular id")

        } else {
            
            // if the id is valid the post should now be delete 
            const deletePostData = await PostMessage.findByIdAndDelete(id)

            // status code 2020means accepted
            res.status(202).json(deletePostData)

        }

    } catch (error) {
        
        console.log(error)

        res.status(500).json(error)

    }

};

// liking a post basically like updating the number of likes the post have 
module.exports.likePost = async (req, res) => {

    try {
        
        const { id } = req.params;

        if (!request.userId) {
            
            res.json({ message: "Unauthenticated" })
            
        }

        // checking to see if the id is not a valid mongoose object id 
        // the isValid Checks if the value is a valid json ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            
            res.status(404).send("No post with this particular id")

        } else {
            
            // if the id is valid the post
            
            // this will return all the object with the intially value of the likecount
            const postLiked = await PostMessage.findById(id)

            if (postLiked.id) {
                
                // this will update the value of the like count by adding one to the intially value 
                const updateLikedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: postLiked.likeCount + 1 }, { new: true })
                
                // status code 2020means accepted
                res.status(201).json(updateLikedPost)

            } else {
                
                res.status(404).json("post not liked")

            }    
        }

    } catch (error) {
      
        console.log(error);

        res.status(404).json(error)
    }
    
};