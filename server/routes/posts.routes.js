const express = require("express");

const { getPosts, createPost, updatePost, deletePost, likePost } = require("../controllers/posts.controller");
const { auth } = require("../middleware/auth");

const routes = express.Router();

// creation of routes

// fetching all info 
routes.get("/", getPosts);

// creation of content
routes.post("/", auth, createPost);

// updating content 
routes.patch("/:id", auth, updatePost);

// deleting of posts 
routes.delete("/:id",auth, deletePost);

// liking a post 
routes.put("/:id", auth, likePost);

module.exports = { routes };