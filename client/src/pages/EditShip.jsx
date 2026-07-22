
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditShip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ship, setShip] = useState({
    ship_name: "",
    source: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
    available_seats: "",
    price: "",
  });

  useEffect(() => {
    fetchShip();
  }, []);

  const fetchShip = async () => {
    try {
      const res = await API.get("/ships");

      const selectedShip = res.data.find(
        (item) => item.id === Number(id)
      );

      if (selectedShip) {
        setShip(selectedShip);
      }
    } catch (err) {
      console.log(err);
      alert("Failed to load ship details");
    }
  };

  const handleChange = (e) => {
    setShip({
      ...ship,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/ships/${id}`, ship);

      alert("🚢 Ship Updated Successfully!");

      navigate("/ships");
    } catch (err) {
      console.log(err);
      alert("Failed to update ship");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0d6efd" }}>
        ✏ Edit Ship
      </h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="ship_name"
          placeholder="Ship Name"
          value={ship.ship_name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="source"
          placeholder="Source"
          value={ship.source}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={ship.destination}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Departure Time</label>

        <br />

        <input
          type="time"
          name="departure_time"
          value={ship.departure_time}
          onChange={handleChange}
          required
        />

        <br /><br />

        <label>Arrival Time</label>

        <br />

        <input
          type="time"
          name="arrival_time"
          value={ship.arrival_time}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="available_seats"
          placeholder="Available Seats"
          value={ship.available_seats}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={ship.price}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#0d6efd",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Update Ship
        </button>
      </form>
    </div>
  );
}

export default EditShip;

