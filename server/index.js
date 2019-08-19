const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const massive = require("massive");

const uc = require("./controllers/userController");

require("dotenv").config();
massive(process.env.CONNECTION_STRING).then(db => app.set("db", db));

const app = express();
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
  })
);

app.use(express.static(`${__dirname}/../build`));

//auth0 endpoints----------------------------
app.get("/auth/callback", uc.authCallback);
app.post("/api/logout", uc.logout);
app.get("/api/user-data", uc.checkLoggedIn, uc.userData);
//--------------------------------------------

const SERVER_PORT = process.env.SERVER_PORT || 3040;
app.listen(SERVER_PORT, () => {
  console.log("Server listening on port " + SERVER_PORT);
});
