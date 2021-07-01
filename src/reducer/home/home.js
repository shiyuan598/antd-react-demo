export default function home(home = {collapsed: false}, action) {
  switch (action.type) {
    case "TOGGLE_COLLAPSED":
      return {
        collapsed: !home.collapsed
      }
    default:
      break;
  }
  return home;
}
