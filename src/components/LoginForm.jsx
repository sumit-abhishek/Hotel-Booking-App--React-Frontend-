import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/loginForm.css";
import FormInput from "./FormInput";
import { fetchFromLocalStorage, saveToLocalStorage } from "../services";
const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const signupData = fetchFromLocalStorage("signupData");

  const handleSubmit = () => {
    const userExist = signupData.find((e) => e.email === value.email);
    if (!userExist) {
      alert("Please Check The Email");
      return;
    } else if (userExist.password !== value.password) {
      alert("Wrong Password Entered");
    } else {
      const loginUserData = signupData.filter((e) => e.email === email.value);
      saveToLocalStorage("loginData", loginUserData);
      navigate("/");
    }
  };

  return (
    <form className="user-login-form" onSubmit={handleSubmit}>
      <FormInput
        type={"text"}
        lable={"Email Address"}
        name={"email"}
        placeholder={"yourmail@example.com"}
        onChange={(e) => setValue({ ...value, email: e.target.value })}
      />
      <FormInput
        type={"password"}
        lable={"Password"}
        name={"password"}
        placeholder={"Enter Your Password"}
        onChange={(e) => setValue({ ...value, password: e.target.value })}
      />
      <button type="submit" className="btn btn-primary">
        Login Now
      </button>
    </form>
  );
};

export default LoginForm;
