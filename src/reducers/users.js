import React from "react";
import {FETCH_USERS} from "../actions/types";

export default (state = [], action) => {
  console.log(`usersReducer processes ${JSON.stringify(state)}`);
  switch (action.type) {
    case FETCH_USERS:
      console.log(`Reducing ${JSON.stringify(action)}`);
      return [...state, ...action.payload ];
  }

  return state;
}