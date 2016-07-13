import React from 'react';
import {connect} from 'react-redux';

class BookDetail extends React.Component {
  render() {
    const bookTitle = this.props.activeBook ? this.props.activeBook.title : "";

    return (
      <div className="col-sm-8">
        <h3>Details for:</h3>
        <span>{bookTitle}</span>
      </div>
    );
  }

  static mapStateToProps(state) {
    return {
      activeBook: state.activeBook
    };
  }
}

export default connect(BookDetail.mapStateToProps)(BookDetail);
