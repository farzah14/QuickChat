const express = require("express");
const route = express.Router();
const logoutControllers = require("../controllers/logout");

route.get("/", logoutControllers.logoutPage);
// route.post("/", logoutControllers.postLogoutPage);
module.exports = route;
