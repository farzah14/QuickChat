const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE}` });
const port = process.env.PORT || 8080;
const path = require("path");
const home = require("./routes/home");
const message = require("./routes/message");
const logoutRoute = require("./routes/logout");
const showProfile = require("./routes/profile");
const createAccount = require("./routes/loginSignUp");

const dataUser = require("./data/account.json");

app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// middleware main page
app.get("/", (req, res) => {
	res.render("main", {
		title: "Main Page",
		accountUser: dataUser,
		isLogout: false,
	});
});

app.use("/join", createAccount);
app.use("/home", home);
app.use("/message", message);
app.use("/profile", showProfile);
// app.use('/', logoutRoute);

// not found middleware
app.use((req, res) => {
	res.send("not found url");
});

app.listen(port, () => {
	console.log(port);
});
