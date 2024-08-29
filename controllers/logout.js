const fs = require("fs");
const path = require("path");
const util = require("../util/mainPath");

let dataUser;
try {
	dataUser = require("../data/account.json");
} catch {
	dataUser = [];
}

