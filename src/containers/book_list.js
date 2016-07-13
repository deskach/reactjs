import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={ () => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-sm-4">
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }

  static mapStateToProps(state) {
    // Whatever is returned will show up as BookList props
    return {
      books: state.books
    };
  }

  // Anything returned from this function will end up as props on the BookList container
  static mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
  }
}

// Promote BookList from a component to a container. It needs to know about dispatch method selectBook.
export default connect(BookList.mapStateToProps, BookList.mapDispatchToProps)(BookList);

/* NOTES:
 * connect function allows for automatic props update of the BookList component whenever state changes;
 *
 */