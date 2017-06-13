const express = require("express");
const BodyParser = require("body-parser");
const multer = require("multer");
const uploader = multer({ dest: "uploads/" });

const app = express();
app.set("view engine", "ejs");
app.use(BodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {
	res.render("form");
});

app.post("/", uploader.fields([{ name: "file" }, { name: "docs" }]), function(req, res) {
	console.log(req.body);
	console.log(req.file);
	console.log(req.files);
	res.render("form");
});


app.listen(process.env.PORT || 3000, function() {
	console.log("Running the form");
});
