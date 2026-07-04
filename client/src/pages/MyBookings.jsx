import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import jsPDF from "jspdf";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } catch (error) {
      console.log(error);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/bookings/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Booking Cancelled Successfully!");

      fetchBookings();
    } catch (error) {
      console.log(error);
      alert("Failed to cancel booking");
    }
  };

  const downloadTicket = (booking) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("SHIP TICKET", 70, 20);

    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");

    doc.text(`Booking ID : ${booking.id}`, 20, 45);
    doc.text(`Ship Name : ${booking.ship_name}`, 20, 60);
    doc.text(`From : ${booking.source}`, 20, 75);
    doc.text(`To : ${booking.destination}`, 20, 90);
    doc.text(`Passengers : ${booking.passengers}`, 20, 105);

    doc.text(
      `Booking Date : ${new Date(
        booking.booking_date
      ).toLocaleDateString()}`,
      20,
      120
    );

    doc.line(20, 130, 190, 130);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(12);

    doc.text(
      "Thank you for choosing Ship Ticket Reservation System!",
      20,
      150
    );

    doc.save(`Ship_Ticket_${booking.id}.pdf`);
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#0d6efd",
          }}
        >
          🚢 My Bookings
        </h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : bookings.length === 0 ? (
          <h2>No Bookings Found</h2>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                background: "white",
              }}
            >
              <h2 style={{ color: "#0d6efd" }}>
                {booking.ship_name}
              </h2>

              <p>
                <strong>📍 From:</strong> {booking.source}
              </p>

              <p>
                <strong>🏁 To:</strong> {booking.destination}
              </p>

              <p>
                <strong>👥 Passengers:</strong> {booking.passengers}
              </p>

              <p>
                <strong>📅 Booking Date:</strong>{" "}
                {new Date(
                  booking.booking_date
                ).toLocaleDateString()}
              </p>

              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={() => downloadTicket(booking)}
                  style={{
                    background: "#0d6efd",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  📄 Download Ticket
                </button>

                <button
                  onClick={() => cancelBooking(booking.id)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  ❌ Cancel Booking
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default MyBookings;