import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/loginForm.css";
import FormInput from "../FormInput";
import { fetchFromLocalStorage, saveToLocalStorage } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const signupData = fetchFromLocalStorage("signupData");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError({ email: false, password: false });
    if (!value.email || !value.password) {
      setError({
        email: !value.email,
        password: !value.password,
      });
      return;
    }
    if (!signupData) {
      toast.error("No such user found.  Please Register First");
      return;
    }
    const userExist = signupData.find((e) => e.email === value.email);
    if (!userExist) {
      toast.error("No such user found. Please Check The Email or Signup First");
      return;
    } else if (userExist.password !== value.password) {
      toast.error("Wrong Password Entered");
    } else {
      const loginUserData = signupData.filter((e) => e.email === email.value);
      saveToLocalStorage("loginData", loginUserData);
      navigate("/");
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="user-login-form" onSubmit={handleSubmit}>
        <>
          <FormInput
            type={"text"}
            lable={"Email Address"}
            name={"email"}
            placeholder={"yourmail@example.com"}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, email: e.target.value }));
              setError((prev) => ({ ...prev, email: !e.target.value }));
            }}
            className={error.email ? "is-invalid" : ""}
          />
          {error.email ? (
            <small className="text-danger">This Field is Required</small>
          ) : (
            ""
          )}
        </>
        <>
          <FormInput
            type={"password"}
            lable={"Password"}
            name={"password"}
            placeholder={"Enter Your Password"}
            onChange={(e) => {
              const password = e.target.value;
              setValue((prev) => ({ ...prev, password }));
              setError((prev) => ({ ...prev, password: !password }));
            }}
            className={error.password ? "is-invalid" : ""}
          />
          {error.password && (
            <small className="text-danger">This Field is Required</small>
          )}
        </>
        <button type="submit" className="btn btn-primary">
          Login Now
        </button>
      </form>
    </>
  );
};

export default LoginForm;
