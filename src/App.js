import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./route/routes";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.login);
  return (
    <Fragment>
      <Switch>
        {routes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              render={
                !login.name && item.path !== "/login"
                  ? () => {
                      return <Redirect to="/login" />;
                    }
                  : item.render
              }
            />
          );
        })}
      </Switch>
    </Fragment>
  );
}

export default App;
