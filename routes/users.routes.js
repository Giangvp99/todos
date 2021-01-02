const express = require("express");
const route = express.Router();
const controller = require("../controllers/users.controllers");

route.get("/", controller.index);
route.get("/all", controller.getAllUsers);
route.get("/create", controller.createUser);
route.post("/create", controller.createUserPost);
route.get("/:id", controller.getUserById);
route.delete("/:id", controller.deleteUserById);

module.exports = route;
