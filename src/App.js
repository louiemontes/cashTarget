import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import TargetDetails from "./components/targets/TargetDetails";
import SignIn from "./components/auth/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/target/:id" component={TargetDetails} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
