import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage, Home, SearchResults, Notifications, Interests, Account } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/home" exact>
          <Home />
      </Route>
      <Route path="/searchresults" exact>
          <SearchResults />
      </Route>
      <Route path="/notifications" exact>
          <Notifications />
      </Route>
      <Route path="/interests" exact>
          <Interests />
      </Route>
      <Route path="/settings" exact>
          <Account />
      </Route>
    </Switch>
  );
};

export default Routes;
