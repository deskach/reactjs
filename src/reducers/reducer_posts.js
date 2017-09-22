import {FETCH_POSTS} from "../actions";
import _ from 'lodash';

export default function (state = {}, action = {}) {
    console.log('alskjdfdsalj');

    switch (action.type) {
        case FETCH_POSTS:
            _.mapKeys(action.payload.data, "id");
            break;
    }

    return state;
}