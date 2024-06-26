require("dotenv").config();
const express = require("express");

const app = express();

const githubData = {
  login: "meregmi",
  id: 173387671,
  node_id: "U_kgDOClWvlw",
  avatar_url: "https://avatars.githubusercontent.com/u/173387671?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/meregmi",
  html_url: "https://github.com/meregmi",
  followers_url: "https://api.github.com/users/meregmi/followers",
  following_url: "https://api.github.com/users/meregmi/following{/other_user}",
  gists_url: "https://api.github.com/users/meregmi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/meregmi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/meregmi/subscriptions",
  organizations_url: "https://api.github.com/users/meregmi/orgs",
  repos_url: "https://api.github.com/users/meregmi/repos",
  events_url: "https://api.github.com/users/meregmi/events{/privacy}",
  received_events_url: "https://api.github.com/users/meregmi/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2024-06-20T15:49:04Z",
  updated_at: "2024-06-20T16:09:14Z",
};

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/test", (req, res) => {
  res.json(githubData);
});

app.get("/login", (req, res) => {
  res.send("Login Successful");
});

app.get("/service", (req, res) => {
  res.send("This is service route,");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listen on port ${process.env.PORT}`);
});
