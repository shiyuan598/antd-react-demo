export default function home(login = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.username
      };
    case "LOGOUT":
      return {
        name: ""
      };
    default:
      break;
  }
  return login;
}
