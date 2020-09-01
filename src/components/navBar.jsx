import React, { Component } from "react";
import Logo from "../images/British_University_in_Egypt.png";
// Dummy NavBar
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          <img src={Logo} width="120" alt="BUE LOGO"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Register">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Register">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Register">
                Research
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Register">
                Innovation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/Register"
                tabIndex="-1"
                aria-disabled="true"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
