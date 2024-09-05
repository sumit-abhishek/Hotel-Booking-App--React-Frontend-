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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({});

  const signupData = fetchFromLocalStorage("signupData") || [];
  const handleSubmitFunction = (e) => {
    e.preventDefault();
    let formError = {};
    //Validating Inputs
    if (!value.fullName.trim() || !isValidFullName(fullName.value)) {
      formError.fullName = "Please Enter a valid Full Name.";
    }
    if (!value.email.trim() || !isValidEmail(email.value)) {
      formError.email = "Please enter a valid Email Address.";
    }

    if (!value.password.trim() || !isStrongPassword(password.value)) {
      formError.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }
    if (password.value.trim() !== value.confirmPassword.trim()) {
      formError.confirmPassword = "Password must Match.";
    }
    if (!value.isChecked) {
      formError.isChecked =
        "You must agree to the Terms, Privacy Policy, and Fees.";
    }
    // If there are errors, set them in state and prevent form submission
    if (Object.keys(formError).length > 0) {
      setErrors(formError);
      toast.error("Please fix the errors in the form.");
      return;
    }

    // Clear errors if everything is valid
    setErrors({});

    //Email Already Exist
    const emailExist = signupData.some((e) => e.email === value.email);
    if (emailExist) {
      alert("Email already exists");
      return;
    }
    signupData.push(value);
    saveToLocalStorage("signupData", signupData);
    // navigate("/login");
  };
  return (
    <>
      <ToastContainer />
      <form className="form user-sign-form " onSubmit={handleSubmitFunction}>
        <FormInput
          type={"text"}
          lable={"Full Name"}
          name={"fullName"}
          placeholder={"Enter Your Full Name"}
          onChange={(e) => {
            const fullName = e.target.value;
            setValue((prev) => ({ ...prev, fullName }));
            setErrors((prev) => ({ ...prev, fullName: !fullName }));
          }}
          className={errors.fullName ? "is-invalid" : ""}
        />
        {errors.fullName && (
          <small className="text-danger">{errors.fullName}</small>
        )}
        <FormInput
          type={text}
          lable={"Email Address"}
          name={"email"}
          placeholder={"yourmail@example.com"}
          onChange={(e) => {
            const email = e.target.value;
            setValue((prev) => ({ ...prev, email }));
            setErrors((prev) => ({ ...prev, email: !email }));
          }}
          className={errors.email ? "is-invalid" : ""}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
        <FormInput
          type={"password"}
          lable={"Password"}
          name={"password"}
          placeholder={"Enter New Password"}
          className={errors.password ? "is-invalid" : ""}
          onChange={(e) => {
            const password = e.target.value;
            setValue((prev) => ({ ...prev, password }));
            setErrors((prev) => ({ ...prev, password: !password }));
          }}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}
        <FormInput
          type={"password"}
          lable={"Confirm Password"}
          name={"confirmPassword"}
          placeholder={"Confirm Your Password"}
          className={errors.confirmPassword ? "is-invalid" : ""}
          onChange={(e) => {
            const confirmPassword = e.target.value;
            setValue((prev) => ({ ...prev, confirmPassword }));
            setErrors((prev) => ({
              ...prev,
              confirmPassword: !confirmPassword,
            }));
          }}
        />
        {errors.confirmPassword && (
          <small className="text-danger">{errors.confirmPassword}</small>
        )}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreement"
            onChange={(e) => {
              const isChecked = e.target.value;
              setValue((prev) => ({ ...prev, isChecked }));
              setErrors((prev) => ({
                ...prev,
                isChecked: !isChecked,
              }));
            }}
          />
          {errors.isChecked && (
            <small className="text-danger">{errors.isChecked}</small>
          )}
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
    </>
  );
};

export default SignupForm;
