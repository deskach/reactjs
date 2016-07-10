import React from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos={this.state.videos} />
    </div>;
  }
}

// 2. Add the component's html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

/* NOTES:
 - const is ES6 feature;
 - in react the root component is the one allowed to do data-fetching from (Redux, REST-api etc);
 - <VideoList videos={} ...> - here prop 'videos' is passed to the component. The child component accesses it
 through an input argument passed to the constructor.
 */
