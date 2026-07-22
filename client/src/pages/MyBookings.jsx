import { useEffect, useState } from "react";
import API from "../services/api";
import "./MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/bookings/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load bookings");
    }
  };

  const handleDelete = async (bookingId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/bookings/${bookingId}`);

      alert("Booking Cancelled Successfully!");

      fetchBookings();

    } catch (err) {
      console.log(err);

      alert(
       err.response?.data?.message || "Failed to cancel booking"
      );
    }
  };


  return (
    <div className="my-bookings">
      <h1>🚢 My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <h2>{booking.ship_name}</h2>

            <p>
              <strong>Route:</strong> {booking.source} → {booking.destination}
            </p>

            <p>
              <strong>Passengers:</strong> {booking.passengers}
            </p>

            <p>
              <strong>Booked On:</strong>{" "}
              {new Date(booking.booking_date).toLocaleDateString()}
            </p>

            <button onClick={() => handleDelete(booking.id)}>
              Cancel Booking
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyBookings;