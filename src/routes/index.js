import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../components/Auth";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <div>HIHI</div>} />
        <Route path="/auth" component={Auth} />
        <Route component={() => <div>NOT FOUND</div>} />
      </Switch>
    </Router>
  );
};
