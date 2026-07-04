import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShipList from "./pages/ShipList";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ships" element={<ShipList />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:id" element={<Booking />} />

        {/* THIS MUST EXIST */}
        <Route path="/mybookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;