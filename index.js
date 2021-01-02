const express = require("express");

const db = require("./db");

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

//routes
const indexRoute = require("./routes/index.route");
const usersRoute = require("./routes/users.routes");

app.use("/", indexRoute);
app.use("/users", usersRoute);


app.listen(port, () => {
  console.log("Server listening on port " + port);
});
