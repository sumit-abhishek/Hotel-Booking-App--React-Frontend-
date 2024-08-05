import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminBookingArea from "./AdminBookingArea";
import AdminPropertyArea from "./AdminPropertyArea";
import AdminDashboardArea from "./AdminDashboardArea";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<AdminDashboardArea />}></Route>
        <Route path="booking" element={<AdminBookingArea />}></Route>
        <Route path="properties" element={<AdminPropertyArea />}></Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
