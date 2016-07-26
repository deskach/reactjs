import React from "react";
import {connect} from "react-redux";

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    static contextTypes = {
      router: React.PropTypes.object
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

    static mamState2props({authenticated}) {
      return {authenticated};
    }
  }

  return connect(Authentication.mamState2props)(Authentication);
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
