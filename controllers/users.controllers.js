const db = require("../db");

module.exports = {
  index: (req, res) => {
    res.json(db);
  },
  getUserById: (req, res) => {
    const id = parseInt(req.params.id);
    const user = db.get("users").find({ id: id }).value();
    console.log("Hi");
    res.json(user);
  },
  createUser: (req, res) => {
    res.send("Hi from page create new user");
  },
  createUserPost: (req, res)=>{
  }
};
