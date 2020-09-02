import React from "react";
import Joi from "joi-browser"; // Special library for form vlaidation
import Form from "../components/form";
import { login } from "../components/services/authService";
// import axios from "axios";
class LoginForm extends Form {
  // username = React.createRef();
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).max(30).label("Password"),
  };

  doSubmit = async () => {
    // Call server
    try {
      const { data } = this.state;
      login(data.email, data.password); // Send the login credentials to the API
      // const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
      // const response = await promise;
      // console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }

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
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
