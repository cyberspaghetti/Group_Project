import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Homepage from "./components/homepage/Homepage";
import GifSearch from "./components/gifSearch/gifSearch";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/gif" component={GifSearch} />
    <Route path="/home/:selectedServer/:selectedRoom" component={Homepage} />
  </Switch>
);
