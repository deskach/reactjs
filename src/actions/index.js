import {CHANGE_AUTH} from "./types";


export function authenticate(isLoggedIn) {
  console.log(`authenticate(${isLoggedIn})`);

  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
