import _ from 'lodash';
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

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    var that = this;

    YTSearch({key: API_KEY, term: term}, (videos) => {
      that.setState({
          videos: videos,
          selectedVideo: videos[0]
        }
      );
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
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
