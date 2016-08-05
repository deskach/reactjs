import axios from "axios";

const ROOT_URL = 'http://localhost:3090';

export function signin({email, password}) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, {email, password});
  }
}

/*
  redux-thunk gives us access to the dispatch function which we can call to
  propagate action to the reducers at any time we want
 */
