import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class Header extends Component {
  renderLinks() {
    let result = [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
    ];

    if (this.props.authenticated) {
      result = (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    }

    return result;
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }

  static mapState2Props(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }
}

export default connect(Header.mapState2Props)(Header);
