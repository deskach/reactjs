import axios from "axios";
import {browserHistory} from "react-router";
import {AUTH_USER, AUTH_ERROR} from "./types";

const ROOT_URL = 'http://localhost:3090';

function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

// this function returns a callcabk which is called by redu-thunk middleware
export function signin({email, password}) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);

        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}

/*
  redux-thunk gives us access to the dispatch function which we can call to
  propagate action to the reducers at any time we want
 */
