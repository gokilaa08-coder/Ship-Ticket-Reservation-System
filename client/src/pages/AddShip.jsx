import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddShip() {
  const navigate = useNavigate();

  const [ship, setShip] = useState({
    ship_name: "",
    source: "",
    destination: "",
    available_seats: "",
    price: "",
  });

  const handleChange = (e) => {
    setShip({
      ...ship,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/ships", ship);

      alert("🚢 Ship Added Successfully!");

      navigate("/ships");
    } catch (error) {
      console.log(error);
      alert("Failed to Add Ship");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>➕ Add New Ship</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">
          Add Ship
        </button>
      </form>
    </div>
  );
}

export default AddShip;