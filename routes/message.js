const express = require("express");
const route = express.Router();
const messageControllers = require("../controllers/message");
const bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({ extended: false }));

route.get("/", messageControllers.messagePage);
route.get("/create", messageControllers.createMessagePage);
route.post("/create", messageControllers.createMessageData);
route.get("/delete/:id", messageControllers.messageDelete);

module.exports = route;
