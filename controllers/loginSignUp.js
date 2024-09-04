const accountUser = require("../models/accountUser");
let dataUser;
try {
	dataUser = require("../data/account.json");
} catch {
	dataUser = [];
}

exports.signUpPage = (req, res) => {
	res.render("signUp", {
		title: "Sign Up Page",
		text: "Login",
		titleForm: "Sign Up",
		accountUser: dataUser,
		isLogout: false
	});
};

exports.postSignUp = (req, res) => {
  const { email, password, confirmEmail, confirmPassword, name } = req.body;
	const date = new Date();
	const dateNow = `${date.getMonth()+1}, ${date.getDate()}, ${date.getFullYear()}`
	if (!email || !password || !confirmEmail || !confirmPassword || !name) {
		res.redirect("/join/signup");
	} else if (email === confirmEmail && password === confirmPassword) {
		const getData = new accountUser(email, password, name, dateNow); 
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
		isLogout: false,
    isLogin:true
	});
};

exports.postLogin = (req, res) => {
	const { email, password } = req.body;
	const userData = dataUser.find(
		(user) => email === user.email && password === user.password
	);
	setTimeout(() => {
		if (userData) {
			res.redirect("/message?message=Login%20Success");
		} else {
			res.redirect("/join/login?message=Login%20Failed");
		}
	}, 1000);
};
