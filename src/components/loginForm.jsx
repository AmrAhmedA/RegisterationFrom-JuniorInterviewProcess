import React, { Component } from "react";
class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row ">
          <div className="col-12 ">
            <form>
              <div className="form-group">
                <label htmlFor="username"></label>Username
                <input id="username" type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="password"></label>Password
                <input id="password" type="text" className="form-control" />
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
