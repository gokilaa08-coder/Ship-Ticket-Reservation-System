
import { useState } from "react";
import API from "../services/api";
import "./AddShip.css";

function AddShip() {
  const [ship, setShip] = useState({
    ship_name: "",
    source: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
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

      setShip({
        ship_name: "",
        source: "",
        destination: "",
        available_seats: "",
        price: "",
      });

    } catch (err) {
      console.log(err);
      alert("Failed to Add Ship");
    }
  };

  return (
    <div className="add-ship-page">

      <h1>➕ Add New Ship</h1>

      <form className="add-ship-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="ship_name"
          placeholder="Ship Name"
          value={ship.ship_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="source"
          placeholder="Source"
          value={ship.source}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={ship.destination}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="departure_time"
          value={ship.departure_time}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="arrival_time"
          value={ship.arrival_time}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="available_seats"
          placeholder="Available Seats"
          value={ship.available_seats}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={ship.price}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Ship
        </button>

      </form>

    </div>
  );
}

export default AddShip;

