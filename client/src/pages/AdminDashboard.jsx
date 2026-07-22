
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [totalShips, setTotalShips] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const ships = await API.get("/ships");
      const users = await API.get("/users");
      const bookings = await API.get("/bookings");

      setTotalShips(ships.data.length);
      setTotalUsers(users.data.length);
      setTotalBookings(bookings.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-dashboard">

      <h1>🚢 Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        <div className="card">
          <h2>🚢 Total Ships</h2>
          <h1>{totalShips}</h1>
        </div>

        <div className="card">
          <h2>👥 Total Users</h2>
          <h1>{totalUsers}</h1>
        </div>

        <div className="card">
          <h2>🎫 Total Bookings</h2>
          <h1>{totalBookings}</h1>
        </div>
      </div>

      <div className="dashboard-cards">

        <Link to="/admin/addship" className="card">
          <h2>➕ Add Ship</h2>
          <p>Add a new ship to the system.</p>
        </Link>

        <Link to="/ships" className="card">
          <h2>🚢 Manage Ships</h2>
          <p>View, edit and delete ships.</p>
        </Link>

        <Link to="/users" className="card">
          <h2>👥 View Users</h2>
          <p>See all registered users.</p>
        </Link>

        <Link to="/bookings" className="card">
          <h2>🎫 View Bookings</h2>
          <p>Manage all bookings.</p>
        </Link>

      </div>

    </div>
  );
}

export default AdminDashboard;

