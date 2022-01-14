import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from "react";

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
