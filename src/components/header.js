import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a href="#">Sign In</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
