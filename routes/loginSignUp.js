const express = require("express");
const route = express.Router();
const loginSignupControllers = require("../controllers/loginSignUp");
const bodyParser = require("body-parser");

route.use(bodyParser.urlencoded({ extended: false }));

route.get("/signup", loginSignupControllers.signUpPage);
route.post("/signup", loginSignupControllers.postSignUp);

route.get("/login", loginSignupControllers.loginPage);
route.post("/login", loginSignupControllers.postLogin);

module.exports = route;
