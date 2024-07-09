import React from "react";
import Logo from "./Logo";
import "../style/adminLoginBackground.css";
import { Link } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";

const AdminLoginBackground = () => {
  return (
    <div className="backgroundBody">
      <section className="admin-login-main">
        <div className="admin-login">
          <div className="admin-login-logo">
            <Logo />
          </div>

          <AdminLoginForm />
          <span id="adminDashboard">
            <a href="admin.html">Go to Admin Dashboard →</a>
          </span>

          {/* <!-- Will Change to Forgot Password --> */}
          <span id="backToHome">
            <Link to="/">
              <a>← Go to Eureka</a>
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
};

export default AdminLoginBackground;