const express = require("express");

const { getPosts, createPost } = require("../controllers/posts.controller");

const routes = express.Router();

// creation of routes

routes.get("/", getPosts);

routes.post("/", createPost);

module.exports = { routes };