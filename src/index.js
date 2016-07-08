import React from "react";
import ReactDOM from "react-dom";

import SearchBar from './components/search_bar';

// const API_KEY = "AIzaSyCg_lS0N0cyWuUbwevaWekrFfSZH88QyDA";

// 1. Create a react component which can generate HTML
const App = () => {
  return <div>
    <SearchBar />
  </div>;
};

// 2. Add the component's html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

/* NOTES:
 - const is ES6 feature;
 */
