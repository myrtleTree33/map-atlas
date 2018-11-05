import React, { Component } from "react";

import { Link, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Creator from "./screens/Creator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/creator">Creator</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/creator" component={Creator} />
        </Switch>
      </div>
    );
  }
}

export default App;
