import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Homepage from "./components/homepage/Homepage";
import CardBig from './components/Posts/CardBig'
export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path ='/card/:cardId' component={CardBig}/>
    <Route path="/home/:selectedServer/:selectedRoom" component={Homepage} />
  </Switch>
);
