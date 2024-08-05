import React from "react";
import "../../style/adminLoginForm.css";

const AdminLoginForm = () => {
  return (
    <div className="admin-login-form">
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
