// State argument is a sub-state this particular reducer is responsible for
export default function (state, action) {
  var action2result = {
    'BOOK_SELECTED': action.payload
  };

  return action2result[action.type] || state || null;
}