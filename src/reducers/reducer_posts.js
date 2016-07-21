import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {...state, all: action.payload.data };
      //^ return current state having its all property set to action.payload.data

    default:
      return state;
  }
}
