import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load bookings");
    }
  };

  return (
    <>
      <AdminSidebar />

      <div
        style={{
          marginLeft: "250px",
          padding: "30px",
          background: "#f4f7fb",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "#0d6efd", marginBottom: "30px" }}>
          🎫 All Bookings
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
            boxShadow: "0 5px 10px rgba(0,0,0,0.15)",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0d6efd",
                color: "white",
              }}
            >
              <th style={th}>ID</th>
              <th style={th}>User</th>
              <th style={th}>Email</th>
              <th style={th}>Ship</th>
              <th style={th}>Route</th>
              <th style={th}>Passengers</th>
              <th style={th}>Booking Date</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td style={td}>{booking.id}</td>
                <td style={td}>{booking.name}</td>
                <td style={td}>{booking.email}</td>
                <td style={td}>{booking.ship_name}</td>
                <td style={td}>
                  {booking.source} ➜ {booking.destination}
                </td>
                <td style={td}>{booking.passengers}</td>
                <td style={td}>
                  {new Date(booking.booking_date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const th = {
  padding: "12px",
  border: "1px solid #ddd",
};

const td = {
  padding: "12px",
  border: "1px solid #ddd",
};

export default Bookings;