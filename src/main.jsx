import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rooms from "./pages/Rooms";
import Admin from "./pages/Admin";
import Reservation from "./pages/Reservation";
import Confirmation from "./pages/Confirmation";
import AdminDashboard from "./pages/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
