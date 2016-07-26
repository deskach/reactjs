import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/app";
import Home from "./components/home";
import Resources from "./components/resources";
import requireAuth from "./components/require_auth";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="resources" component={requireAuth(Resources)}/>
  </Route>
)
