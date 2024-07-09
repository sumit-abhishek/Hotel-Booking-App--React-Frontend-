import React from "react";

const FormInput = ({ type, lable, name, placeholder, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {lable}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
