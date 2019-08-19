import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Homepage from "./components/homepage/Homepage";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path='/home' component={Homepage} />
  </Switch>
);
