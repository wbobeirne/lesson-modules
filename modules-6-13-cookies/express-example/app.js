const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.set("view engine", "ejs");
app.use(cookieParser());

app.get("/", function(req, res) {
	res.render("cookies", { cookies: req.cookies });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
