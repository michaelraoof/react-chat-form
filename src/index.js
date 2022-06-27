import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home";

import Notfound from "./components/notFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/chat" component={Home} />
        <Route path="/" component={App} />

        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
