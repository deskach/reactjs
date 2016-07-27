import {FETCH_USERS} from "./types";

export function fetchUsers() {
  console.log('fetchUsers()');

  return {
    type: FETCH_USERS,
    payload: [
      {name: 'Jane'},
      {name: 'Alex'},
      {name: 'John'}
    ]
  }
}
