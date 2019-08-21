import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Homepage from "./components/homepage/Homepage";
import ServerRegister from "./components/registration/ServerRegistration";
import FakeHomepage from "./components/JeordinTest/FakeHomepage";
// import RoomsMap from "./components/JeordinTest/RoomsMap";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/home" component={Homepage} />
    <Route exact path="/registerServer" component={ServerRegister} />
    <Route exact path="/jeordinTest" component={FakeHomepage} />
  </Switch>
);
