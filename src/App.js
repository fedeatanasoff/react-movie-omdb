import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    );
  }
}

export default App;
