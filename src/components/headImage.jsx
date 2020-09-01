import React, { Component } from "react";
import logo from "../images/BUELogo.png";
import "../App.css";
class HeaderImage extends Component {
  state = {};
  render() {
    return (
      <img
        className="d-block mx-auto "
        src={logo}
        alt="Seecured Logo"
        height="250"
        width="300"
      ></img>
    );
  }
}

export default HeaderImage;
