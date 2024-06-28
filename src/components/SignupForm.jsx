import React from "react";
import "../style/signUpForm.css";
const SignupForm = () => {
  return (
    <form className="form user-sign-form ">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          autoComplete="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          autoComplete="email"
          placeholder="youremail@mail.com"
          required
        />
        <div id="email" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="min. 8 Character"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="min. 8 Character"
          required
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="agreement"
          required
        />
        <label
          className="form-check-label"
          htmlFor="agreement"
          id="agreeCheckbox"
        >
          I agree to all <a href="#">Terms, Privacy Policy</a> and
          <a href="#">Fees.</a>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
