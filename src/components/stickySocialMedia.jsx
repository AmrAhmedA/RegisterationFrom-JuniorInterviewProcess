import React, { Component } from "react";
import "../App.css";

class StickySocialMedia extends Component {
  state = {};
  render() {
    return (
      <div className="icon-bar">
        <a href="https://www.facebook.com/amrahmedgewaly/" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="/#" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/#" className="google">
          <i className="fa fa-google"></i>
        </a>
        <a
          href="https://www.linkedin.com/school/the-british-university-in-egypt/about/"
          className="linkedin"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/AmrAhmedA/RegisterationFrom-JuniorInterviewProcess"
          className="github"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    );
  }
}

export default StickySocialMedia;
