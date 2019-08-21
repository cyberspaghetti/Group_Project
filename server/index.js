require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");

const scc = require("./controllers/serverChannelController");
const uc = require("./controllers/userController");
const rc = require("./controllers/roomController");
const fc = require("./controllers/friendsController");

//passport stuff/auth0-----------------------------------------------------------------------
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

let returnStr = "/";

const port = 4000;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("massive-err", err));

app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/api/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      console.log(profile);
      app
        .get("db")
        .get_user_by_auth_id([profile.id])
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .create_user_by_auth_id([
                profile.id,
                profile.emails[0].value,
                profile.name.givenName,
                profile.picture
              ])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get("/api/getUser", (req, res, next) => {
  if (req.user) {
    console.log("is a user");
    res.status(200).json(req.user);
    // call steven so he can have a look
  } else res.sendStatus(500);
});

app.get(
  "/api/login",
  passport.authenticate("auth0", {
    failureRedirect: `http://localhost:3000/#/`
  }),
  (req, res) => {
    res.redirect(`http://localhost:3000/#/`);
  }
);

app.get(`/api/logout`, (req, res) => {
  req.logout();

  let returnTo = "http://localhost:3000/";

  res.redirect(
    `https://${process.env.DOMAIN}/v2/logout?returnTo=${returnTo}&client_id=${
      process.env.CLIENT_ID
    }`
  );
});

app.post("/api/redirect", (req, res, next) => {
  returnStr = req.body.place;
  res.status(200).send(returnStr);
});
//-----------------------------------------------------------------------

//user endpoints
app.put(`/api/editUser`, uc.editUser);
app.delete(`/api/logout`, uc.logout);
app.get('/api/users', uc.getUsers)

//Friends end points
app.get('/api/getFriends/:user_id', fc.getFriends)

//Server Channel Endpoints
app.post("/api/createServer", scc.createServer);
app.get("/api/server/:id", scc.getUserServer);
app.get("/api/serverName/:id", scc.getServerName);
app.delete("/api/deleteServerUser/:userId", scc.deleteServerUser);
app.get("/api/servers", scc.getServers);
app.get("/api/serverUsers/:serverId", scc.getServerUsers);
app.put("/api/addUserToServer", scc.addServerUser);

//room endpoints
app.post(`/api/createRoom`, rc.createRoom);
app.get(`/api/getRooms/:server_id`, rc.getRooms);

//sockets---------

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
