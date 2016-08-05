import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar navbar-default">
          <nav className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="#">Sign In</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
