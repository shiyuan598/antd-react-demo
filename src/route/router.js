import React from "react";
import LoginView from '../component/login/login'
import IndexView from "../view/index";
import AboutView from "../view/about";
import UndefinedView from "../view/404";

const routes = [
  {
    path: "/",
    exact: true,
    render(props) {
      return <IndexView {...props} />;
    }
  },
  {
    path: "/login",
    exact: true,
    render(props) {
      return <LoginView {...props} />;
    }
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutView {...props} />;
    }
  },
  {
    path: "",
    exact: false,
    render(props) {
      return <UndefinedView {...props} />;
    }
  }
];

export default routes;
