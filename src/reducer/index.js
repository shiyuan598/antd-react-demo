import { combineReducers } from "redux";
// 不同模块的reducer分别定义
import home from "./home";

// 也可以这样合并
let combine = combineReducers({
  home: home
});

export default combine;
