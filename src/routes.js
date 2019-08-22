import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Homepage from "./components/homepage/Homepage";
import ServerRegistration from "./components/registration/ServerRegistration";
import PostsMap from "./components/Posts/CardMap";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/home/:selectedServer/:selectedRoom" component={Homepage} />
    <Route path="/newsFeed" component={PostsMap} />
    <Route exact path="/register" component={ServerRegistration} />
  </Switch>
);
