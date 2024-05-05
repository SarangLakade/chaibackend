const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/tweeter", (req, res) => {
  res.send("Sarang's tweeter handle");
});
app.get("/chai", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
