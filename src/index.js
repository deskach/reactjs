import React from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCg_lS0N0cyWuUbwevaWekrFfSZH88QyDA";

// 1. Create a react component which can generate HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    var that = this;

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      that.setState({videos}); //<=> that.setState({videos: videos}); //ES6 trick
    });
  }

  render() {
    return <div>
      <SearchBar />
    </div>;
  }
}

// 2. Add the component's html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

/* NOTES:
 - const is ES6 feature;
 - in react the root component is the one allowed to do data-fetching from (Redux, REST-api etc);
 -
 */
