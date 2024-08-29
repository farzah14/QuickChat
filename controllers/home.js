let dataUser;
try {
  dataUser = require("../data/account.json")
} catch {
	dataUser = [];
}
exports.homePage = (req, res) => {
	res.render("home", {
		title: "HomePage",
    message: "Home Page",
    accountUser: dataUser,
    isLogout: false,
	});
};
