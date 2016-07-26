import React, {Component} from "react";

class Header extends Component {
  authButton() {
    return (
      <div>
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
}

export default Header
