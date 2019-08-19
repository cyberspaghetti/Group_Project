const axios = require("axios");
require("dotenv").config();

module.exports = {
  async authCallback(req, res) {
    // STEP 1.)
    //Make an object called payload with the code recieved from the clientside, client_id, client_secret, grant_type, redirect_uri
    //hint: code is recieved from client side as a query

    let payload = {
      // client_id
      // client_secret
      // code
      // grant_type
      // redirect_uri
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `http://${req.headers.host}/auth/callback`
    };

    //STEP 2.)
    // WRITE a FUNCTION that RETURNS an axios POST with the payload as the body
    function tradeCodeForAccessToken() {
      //code here..
      return axios.post(
        `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
        payload
      );
    }

    //STEP 3.)
    // WRITE a FUNCTION that accepts the access token as a parameter and RETURNS an axios GET to auth0 that passes the access token as a query
    function tradeAccessTokenForUserInfo(accessTokenResponse) {
      //code here ..
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(
        `https://${
          process.env.REACT_APP_AUTH0_DOMAIN
        }/userinfo/?access_token=${accessToken}`
      );
    }

    //STEP 4.)

    // WRITE a FUNCTION that accepts the userInfo as a parameter and RETURNS a block of code.
    // Your code should set session, check your database to see if user exists and return thier info or if they dont exist, insert them into the database
    function storeUserInfoInDataBase(userInfoResponse) {
      //code here...
      const userData = userInfoResponse.data;

      return req.app
        .get("db")
        .find_user_by_auth0_id(userData.sub)
        .then(users => {
          if (users.length) {
            const user = users[0];
            req.session.user = user;
            res.redirect("/");
          } else {
            const createData = [
              userData.sub,
              userData.email,
              userData.name,
              userData.picture
            ];
            return req.app
              .get("db")
              .create_user(createData)
              .then(newUsers => {
                const user = newUsers[0];
                req.session.user = user;
                console.log(req.session.user);
                res.redirect("/");
              });
          }
        });
    }

    //Final Code, Uncomment after completeing steps 1-4 above

    tradeCodeForAccessToken()
      .then(accessToken => tradeAccessTokenForUserInfo(accessToken))
      .then(userInfo => storeUserInfoInDataBase(userInfo));
    // })
  },

  async logout(req, res) {
    console.log(req.session);
    req.session.destroy();
    console.log(req.session);
    res.send();
  },

  async userData(req, res) {
    res.json({ user: req.session.user });
  },

  async checkLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
      } else {
        res.status(403).json({ message: "Unauthorized" });
      }
  }
};
