const express = require("express");
const route = express.Router();
const profileControllers = require("../controllers/profile");

route.get("/", profileControllers.showProfile);

module.exports = route;
