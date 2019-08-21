import React from "react";

import Menu2 from "./components/Menu";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu2 />
      {routes}
    </div>
  );
}

export default App;
