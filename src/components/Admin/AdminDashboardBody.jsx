import React, { useState } from "react";
import AdminDashboardNav from "./AdminDashboardNav";
import AdminRoutes from "./AdminRoutes";
import { BookingProvider } from "../../Context/BookingContext";

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
      <BookingProvider>
        <AdminRoutes />
      </BookingProvider>
    </div>
  );
};

export default AdminDashboardBody;
