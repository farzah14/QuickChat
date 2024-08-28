const accountUser = require("../models/accountUser");
let dataUser;
try {
  dataUser = require("../data/account.json")
} catch {
	dataUser = [];
}

exports.signUpPage = (req, res) => {
	res.render("signUp", {
		title: "Sign Up Page",
		text: "Login",
		titleForm: "Sign Up",
    accountUser: dataUser,
	});
};

exports.postSignUp = (req, res) => {
	const { email, password } = req.body;
	const { confirmEmail, confirmPassword } = req.body;

	if (!email || !password || !confirmEmail || !confirmPassword) {
		res.redirect("/join/signup");
	} else if (email === confirmEmail && password === confirmPassword) {
		const getData = new accountUser(email, password);
		getData.saveAccount();
		res.redirect("/join/login");
	} else {
		console.log("Please input valid value");
	}
};

exports.loginPage = (req, res) => {
	res.render("login", {
		title: "Login Page",
		text: "Sign Up",
		titleForm: "Login",
    accountUser: dataUser,
	});
};

exports.postLogin = (req, res) => {
	const { email, password } = req.body;
	const userData = dataUser.find(
		(user) => email === user.email && password === user.password
	);
	setTimeout(() => {
		if (userData) {
			res.redirect("/home?message=Login%20Success");
		} else {
			res.redirect("/join/login?message=Login%20Failed");
		}
	}, 100);
};

