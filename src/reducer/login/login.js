export default function home(user = {}, action) {
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
  return user;
}
