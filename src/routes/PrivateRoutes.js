import React from "react";
import { Redirect, Route } from "react-router";
const PrivateRoutes = ({ path, exact, component, isAuth }) => {
  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoutes;
