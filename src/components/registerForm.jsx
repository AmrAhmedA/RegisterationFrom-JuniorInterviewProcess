import React from "react";
import Joi from "joi-browser";
import Form from "../components/form";
class RegisterForm extends Form {
  state = {
    data: { firstname: "", secondname: "", email: "", phone: "", password: "" },
    errors: {},
  };
  schema = {
    firstname: Joi.string().required().label("Firstname"),
    secondname: Joi.string().required().label("Secondname"),
    email: Joi.string().required().email().label("Email"),
    phone: Joi.string().required().min(10).label("Phone"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    // Call Server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-sm-4">
              {this.renderInput("firstname", "Firstname*")}
            </div>
            <div className=" form-group col-sm-4">
              {this.renderInput("secondname", "Secondname*")}
            </div>
            <div className="form-group col-sm-4">
              {this.renderInput("email", "Email*")}
            </div>
            <div className="form-group col-sm-4">
              {this.renderInput("phone", "Phone*")}
            </div>
            <div className="form-group col-sm-4">
              {this.renderInput("password", "Password*", "password")}
            </div>
            <div className="form-group col-sm-4">{this.renderDropDown()}</div>
            <div className="form-group col-sm-4">{this.renderFileInput()}</div>
            <div className="col-xs" align="center">
              {this.renderButton("Register")}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
