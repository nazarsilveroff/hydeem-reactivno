import React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router";
import { mainRoutes } from "../../routes/mainRoutes";
const Main = () => {
  return (
    <main>
      <Suspense fallback={"Loading..."}>
        <Switch>
          {mainRoutes.map((item) => (
            <Route
              path={item.path}
              exact={item.exact}
              component={item.component}
              key={item.path}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
