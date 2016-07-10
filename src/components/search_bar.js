import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

/* Notes
 * - even though React is not directly used here, it however will be used after jsx->js transformation,
 * that is why is should be imported in all jsx modules.
 * - export default means that by default SearchBar is exposed to the outer world.
 * -  SearchBar is a class component (also called 'smart' component). It has mandatory render() method
 * and communicates to other components.
 * - name events as 'onInputChange' or 'handleInputChange' is <on}handle><tag><event>
 *
 *   State is a plain Javascript object that is used to record and react to user events. Each class-based
 *   component has its own state object. When state changes the component re-renders and all its sub-components.
 *   To initialize state with set the property state to a plain js-object inside the constructor of a smart component.
 *   State can only be assigned using '=' inside a constructor. Everywhere else it is handled using this.setState(val)
 *   method - is. never change state like this:
 *      this.state.term = newVal -- that is BAD!!! NEVER DO THIS
 *
 *   <input value={this.state.term}... is a "controlled component", because its value depends on state.
 *
 */