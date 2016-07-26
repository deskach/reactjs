import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {authenticate} from "../actions";

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

  render() {
    return (
      <div className="navbar navbar-default">
        <nav className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  static mamState2props(state) {
    console.log(`mamState2props(${JSON.stringify(state)})`);
    return {authenticated: state.authenticated};
  }
}

export default connect(Header.mamState2props, {authenticate})(Header);
