const fs = require("fs");
const path = require("path");
const util = require("../util/mainPath");

const pathData = path.join(util, "data", "account.json");

module.exports = class AccountUser {
	constructor(email, password, nameUser, date) {
		this.email = email;
		this.password = password;
		this.name = nameUser;
		this.date = date;
	}

	saveAccount() {
		fs.readFile(pathData, (error, currentData) => {
			if (error) {
				return fs.writeFile(
					pathData,
					JSON.stringify([
						{
							email: this.email,
							password: this.password,
							name: this.name,
              joined:this.date
						},
					]),
					(err) => {
            if (err) {
              console.log("Tidak dapat menulis data pertama");
						}
					}
				);
			}
			const convertToObject = JSON.parse(currentData);
			convertToObject.push({
        email: this.email,
				password: this.password,
				name: this.name,
        joined:this.date
			});
			fs.writeFile(pathData, JSON.stringify(convertToObject), (err) => {
				if (err) {
					console.log("Error writing to file");
				}
			});
		});
	}
};
