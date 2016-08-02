import React from "react";
import {FETCH_USERS} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log(`Reducing ${action.type}`);
      return [...state, ...action.payload.data];
  }

  return state;
}
