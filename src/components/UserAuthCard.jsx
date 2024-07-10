import React from "react";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import google from "../assets/google-icon.png";
import "../style/userAuth.css";
import { Link } from "react-router-dom";
const UserAuthCard = ({ formType }) => {
  return (
    <div className="user-auth-main">
      <div className="user-auth">
        <div className="user-auth-image"></div>
        <div className="user-auth-form-area-main">
          <div className="user-auth-form-area">
            <Link to="/">
              <div className="form-logo">
                <Logo />
              </div>
            </Link>

            <div className="user-auth-form">
              {formType === "login" ? (
                <>
                  <h1>Welcome Back</h1>
                  <button type="submit" className="user-auth-google">
                    <img src={google} alt="" />
                    Login With Google
                  </button>
                  <span className="or">OR</span>
                  <LoginForm />
                  <span>
                    No account?
                    <Link to="/signup">
                      <a>Create One</a>
                    </Link>
                  </span>
                </>
              ) : (
                <>
                  <h1>Create Your Account</h1>
                  <button type="submit" className="user-auth-google">
                    <img src={google} alt="" />
                    Sign Up With Google
                  </button>
                  <span className="or">OR</span>
                  <SignupForm />
                  <span>
                    <span>
                      Have an account?
                      <Link to="/login">
                        <a>Log in</a>
                      </Link>
                    </span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthCard;
