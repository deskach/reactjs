import React, { Component } from 'react';

import BookList from '../containers/book_list';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
