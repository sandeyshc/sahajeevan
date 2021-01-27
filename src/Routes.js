import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LandingPage,
  Home,
  SearchResults,
  Notifications,
  Interests,
  Account,
  MembershipPlans,
  Profile,
  Search,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/search" exact>
        <Search />
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
      <Route path="/membership" exact>
        <MembershipPlans />
      </Route>
      <Route path="/profile/:id" exact>
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
