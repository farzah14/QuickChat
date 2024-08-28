const messageModels = require("../models/message");
const data = require("../data/message.json")
const dataUser = require("../data/account.json")

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
		const messageUser = new messageModels(nameUser, message, gender, country);
		messageUser.saveMessage();
	}
	res.redirect("/message/create");
};
