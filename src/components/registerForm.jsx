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
        <div className="row ">
          <div className="col-md-6" style={{ float: "none", margin: "auto" }}>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("firstname", "Firstname")}
              {this.renderInput("secondname", "Secondname")}
              {this.renderInput("email", "Email")}
              {this.renderInput("phone", "Phone")}
              {this.renderInput("password", "Password", "password")}
              {this.renderDropDown()}
              {this.renderFileInput()}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
