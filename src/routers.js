import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { LandingPage } from "./views/LandingPage";

export const RouterList = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
