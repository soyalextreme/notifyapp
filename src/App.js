import React from "react";
import Index from "./paths/Index";
import Register from "./paths/Register";
import InSesion from "./paths/Signin";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/iniciarsesion">
            <InSesion />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
