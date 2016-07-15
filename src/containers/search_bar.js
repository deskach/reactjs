import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    //^these is needed to make 'this' reference correct object during onChange={this.onInputChange} callback executions
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
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

  static mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
  }
}

export default connect(null, SearchBar.mapDispatchToProps)(SearchBar);
//^null here because this container does not use state
