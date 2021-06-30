export default function home(home = {collapsed: false}, action) {
  switch (action.type) {
    case "TOGGLE_COLLAPSED":
      home.collapsed = !home.collapsed;
      break;

    default:
      break;
  }
  return home;
}
