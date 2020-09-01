import React, { Component } from "react";
class Credits extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ height: "100px" }}></div>
        <a href="https://www.facebook.com/amrahmedgewaly/">
          <h5 style={{ textAlign: "center" }}>
            &copy; Amr Ahmed Abd El Rahman{" "}
          </h5>
        </a>
        {console.log("The app is working fine ;)")}
      </div>
    );
  }
}

export default Credits;
