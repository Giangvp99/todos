const express = require("express");
const route = express.Router();
const controller = require("../controllers/users.controllers");

route.get("/", controller.index);
route.get("/:id", controller.getUserById);

module.exports = route;
