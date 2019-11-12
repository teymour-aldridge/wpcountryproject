import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { FlagInfo } from "./views/flag";
import { MechanismInfo } from "./views/mechanism";
import { Evaluation } from "./views/evaluation";
import { Credits } from "./views/credits";

import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <div class="container">
          <div class="columns">
            <div class="column is-one-fifth has-background-warning">
              <p className="menu-label has-text-black no-pad">
                FOR INTERNAL USE ONLY.{" "}
                <span className="menu-label has-text-danger">
                  [CONFIDENTIAL]
                </span>
              </p>

              <aside class="menu">
                <p class="menu-label">Navigation</p>
                <ul class="menu-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/flag">The flag</Link>
                  </li>
                  <li>
                    <Link to="/country">The country</Link>
                  </li>
                  <li>
                    <Link to="/evaluation">Pros & Cons</Link>
                  </li>
                  <li>
                    <Link to="/credits">Credits</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div class="column has-background-grey-lighter">
              <Switch>
                <Route path="/flag">
                  <FlagInfo />
                </Route>
                <Route path="/country">
                  <MechanismInfo />
                </Route>
                <Route path="/evaluation">
                  <Evaluation />
                </Route>
                <Route path="/credits">
                  <Credits />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
