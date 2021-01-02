const db = require("../db");

module.exports = {
  index: (req, res) => {
    const title = "Index page";
    res.render("users/index", { title: title });
  },
  getAllUsers: (req, res) => {
    const title = "All users";
    res.render("users/allUsers", {
      data: db.get("users").value(),
      title: title,
    });
  },
  getUserById: (req, res) => {
    const id = parseInt(req.params.id);
    const user = db.get("users").find({ id: id }).value();
    res.render("users/info", {
      user: user,
      title: "Information",
    });
  },
  createUser: (req, res) => {
    res.render("users/create", {
      title: "Create user",
    });
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
    res.render("users/allUsers", {
      data: db.get("users").value(),
      title: "All users",
    });
  },
};
