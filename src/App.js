import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import ServerRegister from "./components/registration/ServerRegistration"
function App() {
  return <div>{routes}
  <ServerRegister/>
  </div>;
}
export default App;
