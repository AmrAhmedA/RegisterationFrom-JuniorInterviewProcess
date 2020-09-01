import React, { Component } from "react";
// Dummy NavBar
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          BUE
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
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Research
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Innovation
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="/#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
