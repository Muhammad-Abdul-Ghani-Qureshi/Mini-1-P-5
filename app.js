const express = require("express");

const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/confirm", (req, res) => {
  res.render("confirm");
});
app.get("/recommend", (req, res) => {
  res.render("recommend");
});
app.get("/restaurants", (req, res) => {
  res.render("restaurants");
});
app.listen(3000);
