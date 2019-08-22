require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");

const scc = require("./controllers/serverChannelController");
const uc = require("./controllers/userController");
const rc = require("./controllers/roomController");
const fc = require("./controllers/friendsController");
const pc = require("./controllers/postController");

//sockets
const socket = require("socket.io");

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
app.get("/api/users", uc.getUsers);

//Friend Endpoints
app.get("/api/getFriends/:user_id", fc.getFriends);
app.put("/api/addFriend/:user_id", fc.addFriend);
app.delete("/api/deleteFriend/:user_id", fc.deleteFriend);

//Post EndPoints
app.get("/api/getAllPosts", pc.getAllPosts);
app.put("/api/createPost/:serverId", pc.createPost);
app.put("/api/editPost/:newsPostId", pc.createPost);
app.delete("/api/deletePost/:serverId", pc.deletePost);

//Server Channel Endpoints
app.post("/api/createServer", scc.createServer);
app.get("/api/server/:id", scc.getUserServer);
app.get("/api/serverName/:id", scc.getServerName);
app.delete("/api/deleteServerUser/:userId", scc.deleteServerUser);
app.get("/api/servers", scc.getServers);
app.get("/api/serverUsers/:serverId", scc.getServerUsers);
app.put("/api/addUserToServer", scc.addServerUser);

//room Endpoints
app.post(`/api/createRoom`, rc.createRoom);
app.get(`/api/getRooms/:server_id`, rc.getRooms);

//sockets---------

app.get("/api/getRoomName/:socket_room_id", scc.getRoomName);

const io = socket(
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  })
);

io.on("connection", socket => {
  console.log("CONNECTED TO SOCKET");

  socket.on("enter room", async data => {
    let { selectedRoom, selectedServer, roomName } = data;
    const db = app.get("db");
    console.log("You just joined ", selectedRoom);
    const [existingRoom] = await db.look_for_room(selectedRoom);
    console.log("exist", existingRoom);
    if (!existingRoom) await db.create_room(roomName, selectedServer);
    let messages = await db.get_messages(selectedRoom, selectedServer);
    console.log("messages", messages);
    socket.join(selectedRoom);
    io.in(selectedRoom).emit("room entered", messages);
  });

  //send messages
  socket.on("send message", async data => {
    const { selectedRoom, selectedServer, message, sender } = data;
    console.log(selectedServer);
    const db = app.get("db");
    await db.send_message(+selectedRoom, message, +sender, +selectedServer);
    let messages = await db.get_messages(selectedRoom, selectedServer);
    if (messages.length <= 1)
      io.to(selectedRoom).emit("room entered", messages);
    console.log("messages", messages);
    io.to(data.selectedRoom).emit("message sent", messages);
  });

  //disconnected
  socket.on("disconnect", () => {
    console.log("Disconnected from room");
  });
});
//socket ----------------------
