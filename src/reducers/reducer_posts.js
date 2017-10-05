import {FETCH_POSTS} from "../actions";
import _ from 'lodash';

export default function (state = {}, action = {}) {
    switch (action.type) {
        case FETCH_POSTS:
            state = _.mapKeys(action.payload.data, "id");
            break;
    }

    return state;
}