import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Rooms from "./pages/Rooms";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import Reservation from "./pages/Reservation";
import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
