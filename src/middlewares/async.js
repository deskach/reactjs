export default function ({dispatch}) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      // if the action does not have a payload or there is no then property
      // don't do anything, just return it to the outer chain
      return next(action);
    }

    // Make sure the action's promise resolved
    action.payload.then(response => {
      const newAction = {...action, payload: response};

      dispatch(newAction);
    });
  }
}

/*
 * - next means - send this middlware to the next action in my stack. If there
 * are no more actions the result will be sent to the reducers;
 *
 * - dispatch means - start from the top of the middleware stack to make all
 * middlewares process current action again.
 * */
