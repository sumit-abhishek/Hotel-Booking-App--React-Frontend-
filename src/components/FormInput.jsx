import React from "react";

const FormInput = ({ type, lable, name, placeholder, onChange, className }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {lable}
      </label>

      <input
        type={type}
        className={`form-control ${className}`}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
