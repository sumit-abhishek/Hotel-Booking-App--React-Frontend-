import React, { useState } from "react";
import AdminDashboardNav from "./AdminDashboardNav";
import AdminRoutes from "./AdminRoutes";

const AdminDashboardBody = () => {
  const [component, setComponent] = useState("");
  const clickFunction = (value) => {
    setComponent(value);
  };
  return (
    <div className="dashboard-bottom">
      <AdminDashboardNav
        clickFunction={clickFunction}
        selecetdComponent={component}
      />
      <AdminRoutes />
    </div>
  );
};

export default AdminDashboardBody;
