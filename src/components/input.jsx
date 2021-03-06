import React from "react";
const Input = ({ name, label, type, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}></label>
      {label}
      <input
        value={value}
        onChange={onChange}
        autoFocus
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* Conditional Statement */}
    </div>
  );
};

export default Input;
