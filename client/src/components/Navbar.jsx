import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        padding: "15px 40px",
      }}
    >
      <h2>🚢 Ship Reservation</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>

        <Link to="/ships" style={linkStyle}>
          Ships
        </Link>

        <Link to="/mybookings" style={linkStyle}>
          My Bookings
        </Link>

        <Link to="/login" style={linkStyle}>
          Login
        </Link>

        <Link to="/register" style={linkStyle}>
          Register
        </Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  marginLeft: "20px",
};

export default Navbar;