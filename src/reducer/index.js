import { combineReducers } from "redux";
// 不同模块的reducer分别定义
import login from "./login/login";
import home from "./home/home";

// 也可以这样合并
let combine = combineReducers({
  login: login,
  home: home
});

export default combine;
