export function selectBook(book) {
  // selectBook is an ActionCreator. It needs to return an action - an object with a mandatory 'type' property.
  // 'type' is always uppercase
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
