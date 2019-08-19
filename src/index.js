import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./ducks/store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
