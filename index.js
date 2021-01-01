const express = require("express");

const db = require("./db");

const app = express();
const port = 3000;

//routes
const indexRoute = require("./routes/index.route");
const usersRoute = require("./routes/users.routes");

app.use("/", indexRoute);
app.use("/users", usersRoute);


app.listen(port, () => {
  console.log("Server listening on port " + port);
});
