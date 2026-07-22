import { useEffect, useState } from "react";
import API from "../services/api";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load bookings");
    }
  };

  const cancelBooking = async (id) => {
    const confirmDelete = window.confirm(
      "Cancel this booking?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/bookings/${id}`);

      alert("Booking Cancelled Successfully");

      fetchBookings();
    } catch (err) {
      console.log(err);
      alert("Failed to cancel booking");
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#0d6efd" }}>
        🎫 All Bookings
      </h1>

      <table
        style={{
          width: "100%",
          marginTop: "30px",
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
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Ship</th>
            <th>Route</th>
            <th>Passengers</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>

              <td>{booking.name}</td>

              <td>{booking.email}</td>

              <td>{booking.ship_name}</td>

              <td>
                {booking.source} → {booking.destination}
              </td>

              <td>{booking.passengers}</td>

              <td>
                {new Date(
                  booking.booking_date
                ).toLocaleDateString()}
              </td>

              <td>
                <button
                  onClick={() =>
                    cancelBooking(booking.id)
                  }
                  style={{
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;