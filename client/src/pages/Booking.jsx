import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ship, setShip] = useState(null);
  const [passengers, setPassengers] = useState(1);

  useEffect(() => {
    fetchShip();
  }, []);

  const fetchShip = async () => {
    try {
      const res = await API.get("/ships");

      const selectedShip = res.data.find(
        (ship) => ship.id === Number(id)
      );

      setShip(selectedShip);
    } catch (error) {
      console.log(error);
      alert("Failed to load ship details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await API.post(
        "/bookings",
        {
          shipId: Number(id),
          passengers: Number(passengers),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      navigate("/mybookings");
    } catch (err) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  if (!ship) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0d6efd" }}>
        🚢 Book Your Ticket
      </h1>

      <hr />

      <h2>{ship.ship_name}</h2>

      <p>
        <strong>📍 From:</strong> {ship.source}
      </p>

      <p>
        <strong>🏁 To:</strong> {ship.destination}
      </p>

      <p>
        <strong>💺 Available Seats:</strong> {ship.available_seats}
      </p>

      <p>
        <strong>💰 Price:</strong> ₹{ship.price || 2500}
      </p>

      <form onSubmit={handleSubmit}>
        <label>
          <strong>Passengers</strong>
        </label>

        <br />

        <input
          type="number"
          min="1"
          max={ship.available_seats}
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#198754",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default Booking;