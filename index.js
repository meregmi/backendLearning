require("dotenv").config();
const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/test", (req, res) => {
  res.send("Hello from test");
});

app.get("/login", (req, res) => {
  res.send("Login Successful");
});

app.get("/service", (req, res) => {
  res.send("This is service route,");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listen on port ${port}`);
});
