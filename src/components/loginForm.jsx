import React from "react";
import Joi from "joi-browser"; // Special library for form vlaidation
import Form from "../components/form";
class LoginForm extends Form {
  // username = React.createRef();
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

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
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
