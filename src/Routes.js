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
  EditProfile
} from "./views";

import { QueryClient, QueryClientProvider } from "react-query";
import RoutesGuard from "./RoutesGuard";

const Routes = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <RoutesGuard path="/home" exact component={<Home />} />
        <RoutesGuard path="/search" exact component={<Search />} />
        <RoutesGuard
          path="/searchresults"
          exact
          component={<SearchResults />}
        />
        <RoutesGuard
          path="/notifications"
          exact
          component={<Notifications />}
        />
        <RoutesGuard path="/interests" exact component={<Interests />} />
        <RoutesGuard path="/settings" exact component={<Account />} />
        <RoutesGuard path="/membership" exact component={<MembershipPlans />} />
        <RoutesGuard path="/profile/:id" exact component={<Profile />} />
        <RoutesGuard path="/editprofile" exact component={<EditProfile />} />
      </Switch>
    </QueryClientProvider>
  );
};

export default Routes;
