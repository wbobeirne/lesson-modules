const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.set("view engine", "ejs");
app.use(cookieParser("super secret"));

app.get("/", function(req, res) {
	res.cookie("key", "val", { signed: true });
	res.render("cookies", {
		cookies: req.cookies,
		signedCookies: req.signedCookies,
	});
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
