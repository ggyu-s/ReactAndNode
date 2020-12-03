import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action);
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      console.log(action);
      return { ...state, registerSuccess: action.payload };
      break;
    case AUTH_USER:
      console.log(action);
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
