import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";
import NotFound from "./pages/404";
import Forgot from "./pages/auth/forgot";
import Signin from "./pages/auth/login";
import Signup from "./pages/auth/register";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/forgot" exact component={Forgot} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
