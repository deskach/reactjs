import React from "react";
import ReactDOM from "react-dom";

// 1. Create a react component which can generate HTML
const App = () => {
  return <div>Hello world!</div>;
};

// 2. Add the component's html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

/* NOTES:
 - const is ES6 feature;
 */
