import React from "react";
import { Switch, Route } from "react-router-dom";
import News from "./components/News";
import Rooms from "./components/Rooms";
import TextChannel from './components/TextChannel';

export default (
  <Switch>
    <Route exact path="/home/0" component={News} />
    {/* <Route path="/rooms" render={(props) => {
      return (<Rooms {...props}>
        <Route path="/rooms/general" component={TextChannel}/>
      </Rooms>)
    }} /> */}
    <Route path="/rooms" component={Rooms} />
    
  </Switch>
);