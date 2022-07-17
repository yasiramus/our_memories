// all routes handlers

const { PostMessage } = require("../models/postMessage");

module.exports.getPosts = async (req, res) => {

    try {
        
        const getPostMessages = await PostMessage.find();

        console.log(getPostMessages);

        res.status(200).json(getPostMessages)

    } catch (error) {
        
        console.log(error);

        res.status(404).json({ message: error.message })

    }

};

module.exports.createPost = async (req, res) => {

    try {
        
        const postData = req.body;

        const newPost = new PostMessage(postData);

        await newPost.save();

        res.status(201).json(newPost)

    } catch (error) {
        
        console.log(error);

        res.status(404).json({ message: error.message })

    }

};