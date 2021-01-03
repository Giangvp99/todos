const db = require("../db");

module.exports = {
  index: (req, res) => {
    res.json("Hello from index of url user/");
  },
  getAllUsers: (req, res) => {
    res.json(db.get("users").value());
  },
  getUserById: (req, res) => {
    const id = parseInt(req.params.id);
    const user = db.get("users").find({ id: id }).value();
    res.json(user);
  },
  createUser: (req, res) => {
    res.json("Hello from create user");
  },
  createUserPost: (req, res) => {
    let id = db.get("users").value().length + 1;
    let newUser = { id: id, ...req.body };
    db.get("users").push(newUser).write();
    res.redirect("/users/all");
  },
  deleteUserById: (req, res) => {
    let id = parseInt(req.params.id);
    db.get("users").remove({ id: id }).write();
    res.json(db.get("users").value());
  },
};
