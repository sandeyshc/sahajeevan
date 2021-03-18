import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/api";

export default function RoutesGuard({ component, ...options }) {
  return (
    <Route
      {...options}
      render={() =>
        isAuthenticated() ? component : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
}
