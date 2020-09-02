import React, { Component } from "react";
import Logo from "../images/British_University_in_Egypt.png";
import { Link } from "react-router-dom";
// Dummy NavBar
class NavBar extends Component {
  // HeaderView() {
  //   const { pathname } = this.props.useLocation;
  //   console.log(pathname.pathname);
  //   // return <span>Path : {location.pathname}</span>;
  // }

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
              <Link className="nav-link" to="/Register">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Education">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Research">
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Innovation">
                Innovation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/Register"
                tabIndex="-1"
                aria-disabled="true"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
