import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/signUpForm.css";
import FormInput from "../FormInput";
import { text } from "@fortawesome/fontawesome-svg-core";
import {
  fetchFromLocalStorage,
  isStrongPassword,
  saveToLocalStorage,
  isValidFullName,
  isValidEmail,
} from "../../services";

const SignupForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupData = fetchFromLocalStorage("signupData") || [];
  const handleSubmitFunction = () => {
    //Validating Inputs
    if (!value.fullName.trim() || !isValidFullName(fullName.value)) {
      alert("Please Enter a valid Full Name.");
      return;
    }
    if (!value.email.trim() || !isValidEmail(email.value)) {
      alert("Please enter a valid Email Address.");
      return;
    }

    if (!value.password.trim() || !isStrongPassword(password.value)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }
    if (password.value.trim() !== value.confirmPassword.trim()) {
      alert("Password must Match.");
      return;
    }
    //Email Already Exist
    const emailExist = signupData.some((e) => e.email === value.email);
    if (emailExist) {
      alert("Email already exists");
      return;
    }
    signupData.push(value);
    saveToLocalStorage("signupData", signupData);
    navigate("/login");
  };
  return (
    <form className="form user-sign-form " onSubmit={handleSubmitFunction}>
      <FormInput
        type={"text"}
        lable={"Full Name"}
        name={"fullName"}
        placeholder={"Enter Your Full Name"}
        onChange={(e) => setValue({ ...value, fullName: e.target.value })}
      />
      <FormInput
        type={text}
        lable={"Email Address"}
        name={"email"}
        placeholder={"yourmail@example.com"}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
      />
      <FormInput
        type={"password"}
        lable={"Password"}
        name={"password"}
        placeholder={"Enter New Password"}
        onChange={(e) => setValue({ ...value, password: e.target.value })}
      />
      <FormInput
        type={"password"}
        lable={"Confirm Password"}
        name={"confirmPassword"}
        placeholder={"Confirm Your Password"}
        onChange={(e) =>
          setValue({ ...value, confirmPassword: e.target.value })
        }
      />

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
