import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return (
        <button onClick={() => this.props.authenticate(false)}>
          Sign out
        </button>
      )
    }

    return (
      <div onClick={() => this.props.authenticate(true)}>
        <button >Sign in</button>
      </div>
    )
  }

  //TODO: replace <a> by <Link> when routers are defined
  render() {
    return (
      <div className="navbar navbar-static-top">
        <nav className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/resources">Resources</a>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  static mamState2props({authenticated}) {
    return {authenticated};
  }
}

export default connect(Header.mamState2props, actions)(Header);
