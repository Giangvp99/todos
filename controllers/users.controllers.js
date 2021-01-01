const db = require("../db");

module.exports = {
  index: (req, res) => {
    res.json(db);
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    const user = db.get("users").find({ id: id }).value();
    console.log(user);
    res.json(user);
  },
};
