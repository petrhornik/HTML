const express = require("express");
const path = require("path");
const app = express();
const data = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const postData = data[subreddit]; //bracket notation syntax
  if (postData) {
    res.render("postList", { pageName: subreddit, pageContent: postData });
  } else {
    res.render("error", { searchedTerm: subreddit });
  }
});

app.listen(3000, () => {
  console.log(`Naslouchám na portu 3000!`);
});
