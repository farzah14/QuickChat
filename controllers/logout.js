let dataUser = require("../data/account.json");
const path = require("path");
const util = require("../util/mainPath");
const pathData = path.join(util, "data", "account.json");
const fs = require("fs");

exports.logoutPage = (req, res) => {
	dataUser = [];
	fs.writeFileSync(pathData, JSON.stringify(dataUser));
	setTimeout(() => {
		res.redirect("/");
	}, 140);
};
