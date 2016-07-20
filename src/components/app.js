import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/*^ this is needed to display child components defined in the Router */}
      </div>
    );
  }
}
