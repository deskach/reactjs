import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from "../actions/types";

function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: true};
    case UNAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      console.log(`reducing AUTH_ERROR ${action}`);
      return {...state, error: action.payload}
  }

  return state;
}

const rootReducer = combineReducers({
  form,
  auth: authReducer
});

export default rootReducer;
