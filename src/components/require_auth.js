import React from "react";

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication;
}

/*
 Somewhere else we want to use this HOC.
 import Authentication from require_auth
 import Resources ... //this is what we want to be wrapped by HOC

 const ComposedComponent = Authentication(Resources);

 render() {
 ...
 <ComposedComponent />
 ...
 }
 */
