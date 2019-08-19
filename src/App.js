import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import ServerRegister from "./components/registration/ServerRegistration"
import ServersMap from './components/views/ServersMap'
function App() {
  return <div>{routes}
  <ServerRegister/>
  <ServersMap/>
  </div>;
}
export default App;
