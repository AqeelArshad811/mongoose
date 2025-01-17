const http = require("http");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;
exports.createuser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json(req.body);
};
exports.getAllusers = (req, res) => {
  res.json(users);
};
exports.getuser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};
exports.replaceuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  const pro = users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json(pro);
};

exports.deleteuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  console.log(user);
  res.status(201).json({ deleted: user });
};
