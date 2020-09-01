import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../components/input";
class Form extends Component {
  state = { data: {}, errors: {} };
  validateproperty = ({ name, value }) => {
    const obj = { [name]: value }; // Computed property - ES6
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null; // Ternary operator
  };
  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    // console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} }); // errors property should always be set to an object
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateproperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary btn-lg">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderDropDown(props) {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" forhtml="inputGroupSelect01">
            Gender
          </label>
        </div>
        <select className="custom-select" id="inputGroupSelect01">
          <option defaultValue>None...</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>
    );
  }
  renderFileInput() {
    return (
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">ID or Passport</label>
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
    );
  }
}

export default Form;
