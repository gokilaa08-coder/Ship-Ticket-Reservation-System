import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      style={{
        width: "230px",
        height: "100vh",
        background: "#0d6efd",
        color: "white",
        padding: "20px",
        position: "fixed",
      }}
    >
      <h2>🚢 Admin</h2>

      <hr />

      <p>
        <Link to="/admin/dashboard" style={link}>
          📊 Dashboard
        </Link>
      </p>

      <p>
        <Link to="/admin/addship" style={link}>
          ➕ Add Ship
        </Link>
      </p>

      <p>
        <Link to="/ships" style={link}>
          🚢 Manage Ships
        </Link>
      </p>

      <p>
        <Link to="/users" style={link}>
          👤 Users
        </Link>
      </p>

      <p>
        <Link to="/bookings" style={link}>
          🎫 Bookings
        </Link>
      </p>

      <p>
        <Link to="/" style={link}>
          🚪 Logout
        </Link>
      </p>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default AdminSidebar;