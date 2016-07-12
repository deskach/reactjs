import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  static mapStateToProps(state) {
    return {
      books: state.books
    };
  }
}

export default connect(BookList.mapStateToProps)(BookList);

/* NOTES:
* connect function allows for automatic props update of the BookList component whenever state changes;
*
 */