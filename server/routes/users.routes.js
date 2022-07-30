const express = require("express");

const { signin, signup } = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/", signin);

usersRouter.post("/signup", signup);

module.exports = { usersRouter };