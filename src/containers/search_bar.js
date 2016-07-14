import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    //^this is needed to make 'this' reference correct object on onChange={this.onInputChange} callback execution
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className="input-group">
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a 5 day forecast in you favorite cities"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
