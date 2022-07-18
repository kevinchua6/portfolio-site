import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import NavigationBar from "./components/NavigationBar";
import Resume from "./pages/Resume";

const App = () => (
  <Router>
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Redirect to="/resume" />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
