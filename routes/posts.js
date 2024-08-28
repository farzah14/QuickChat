const express = require("express");
const route = express.Router();
const postsControllers = require("../controllers/posts");

route.get("/", postsControllers.postsPage);

module.exports = route;
