import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShipList from "./pages/ShipList";
import Bookings from "./pages/Bookings";
import MyBookings from "./pages/MyBookings";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddShip from "./pages/AddShip";
import EditShip from "./pages/EditShip";
import Users from "./pages/Users";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/ships" element={<ShipList />} />
        <Route path="/booking/:id" element={<Booking />} />

        
        <Route path="/bookings" element={<Bookings />} />

        <Route path="/mybookings" element={<MyBookings />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/addship" element={<AddShip />} />
        <Route path="/editship/:id" element={<EditShip />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;