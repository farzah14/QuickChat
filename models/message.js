const fs = require("fs");
const path = require("path");
const util = require("../util/mainPath");

const pathData = path.join(util, "data", "message.json");

module.exports = class Message {
	constructor(name, message, gender, country) {
		this.name = name;
		this.message = message;
		this.gender = gender;
		this.country = country;
	}

	saveMessage() {
		fs.readFile(pathData, (err, currentMessage) => {
			let messages = [];

			if (err) {
				if (!fs.existsSync(pathData)) {
					messages;
				} else {
					console.log(`File Error : ${err}`);
				}
			}
      messages = JSON.parse(currentMessage);

			messages.push({
				name: this.name,
				message: this.message,
				gender: this.gender,
				country: this.country,
			});

			fs.writeFile(pathData, JSON.stringify(messages), (err) => {
				if (err) {
					console.log("Can't write message:", writeErr);
				}
			});
		});
	}
};
