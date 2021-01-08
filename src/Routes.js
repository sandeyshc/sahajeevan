import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage, Home } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/home" exact>
          <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
