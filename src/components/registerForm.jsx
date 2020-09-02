import React from "react";
import Joi from "joi-browser";
import Form from "../components/form";
import * as userService from "./services/userService";
class RegisterForm extends Form {
  state = {
    data: { firstname: "", secondname: "", email: "", phone: "", password: "" },
    errors: {},
  };
  schema = {
    firstname: Joi.string().required().label("Firstname"),
    secondname: Joi.string().required().label("Secondname"),
    email: Joi.string().required().email().label("Email"),
    phone: Joi.string().required().min(10).max(15).label("Phone"),
    password: Joi.string().required().min(5).max(30).label("Password"),
  };

  doSubmit = async () => {
    // Call Server
    await userService.register(this.state.data);
    this.props.history.push("/Login"); // Programmatic Routing
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-4">
              {this.renderInput("firstname", "Firstname*")}
            </div>
            <div className="col-sm-4">
              {this.renderInput("secondname", "Secondname*")}
            </div>
            <div className="col-sm-4">
              {this.renderInput("email", "Email*")}
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-4 ">
              {this.renderInput("phone", "Phone*")}
            </div>
            <div className="col-sm-4 ">
              {this.renderInput("password", "Password*", "password")}
            </div>
            <div className="col-sm-4 " style={{ marginTop: "23px" }}>
              {this.renderDropDown()}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">{this.renderFileInput()}</div>
            <div className="col-sm-4 col align-self-end" align="center">
              {this.renderButton("Register")}
            </div>
            <div className="col-sm-4">
              <label htmlFor="[FormControlFile]">
                Personal Profile Picture
              </label>
              <input
                type="file"
                className="form-control-file"
                id="FormControlFile"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
