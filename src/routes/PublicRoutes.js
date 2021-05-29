import React from "react";
import { Redirect, Route } from "react-router";
const PublicRoutes = ({ path, exact, component, auth, restricted }) => {
  return auth && restricted ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoutes;
