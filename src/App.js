import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./route/router";

function App() {
  return (
    <Fragment>
      <Switch>
        {routes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              render={item.render}
            />
          );
        })}
      </Switch>
    </Fragment>
  );
}

export default App;
