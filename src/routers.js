import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { LandingPage } from "./views/LandingPage";
import { AllRecords } from "./views/AllRecords";
import { CreateRecord } from "./views/CreateRecord";

export const RouterList = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/all" exact>
          <AllRecords />
        </Route>
        <Route path="/new" exact>
          <CreateRecord />
        </Route>
      </Switch>
    </Router>
  );
};
