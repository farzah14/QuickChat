const messageModels = require("../models/message");
const data = require("../data/message.json");
const dataUser = require("../data/account.json");
const fs = require("fs");
const path = require("path");
const util = require("../util/mainPath");
const pathData = path.join(util, "data", "message.json");

exports.messagePage = (req, res) => {
	res.render("message", {
		title: "Message",
		create: false,
		messages: data,
		accountUser: dataUser,
	});
};

exports.createMessagePage = (req, res) => {
	res.render("message", {
		title: "Message",
		create: true,
		accountUser: dataUser,
	});
};

exports.createMessageData = (req, res) => {
	const { nameUser, message, gender, country } = req.body;
	if (nameUser !== "" && message !== "" && country !== "") {
		const messageUser = new messageModels(
			nameUser,
			message,
			gender,
			country,
			null
		);
		messageUser.saveMessage();
	}
	res.redirect("/message/create");
};
exports.messageDelete = (req, res) => {
	const getId = req.body.id;
	const updatedMessages = data.filter((message) => message.id !== getId);

	fs.writeFile(pathData, JSON.stringify(updatedMessages), (err) => {
		if (err) {
			console.log(false);
		}
	});
	res.redirect("/message");
};

exports.getEditMessage = (req, res)=>{
  res.render("message", {
    title: "Message",
		create: true,
		accountUser: dataUser,
		isLogout: false,
  })
}
