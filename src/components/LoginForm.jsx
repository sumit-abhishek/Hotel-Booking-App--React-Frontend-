import React from "react";
import "../style/loginForm.css";
const LoginForm = () => {
  return (
    <form className="user-login-form">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="youremail@mail.com"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Enter Your Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login Now
      </button>
    </form>
  );
};

export default LoginForm;
