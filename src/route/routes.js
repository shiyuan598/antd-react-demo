import React from "react";
import LoginView from '../component/login/login'
import IndexView from "../component/home/index";
import AboutView from "../component/about/about";
import UndefinedView from "../component/not-found/404";

const routes = [
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
    path: ["/", "/home"],
    // exact: true,
    render(props) {
      return <IndexView {...props} />;
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
