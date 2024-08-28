let dataUser 
try {
  dataUser = require("../data/account.json")
} catch {
	dataUser = [];
}
exports.postsPage = (req, res) => {
	res.render("posts", {
		title: "Post",
		message: "Posts Page",
    accountUser: dataUser,
	});
};
