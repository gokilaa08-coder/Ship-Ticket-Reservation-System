import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditShip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ship, setShip] = useState({
    ship_name: "",
    source: "",
    destination: "",
    available_seats: "",
    price: "",
  });

  useEffect(() => {
    loadShip();
  }, []);

  const loadShip = async () => {
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
    }
  };

  const handleChange = (e) => {
    setShip({
      ...ship,
      [e.target.name]: e.target.value,
    });
  };

  const updateShip = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/ships/${id}`, ship);

      alert("Ship Updated Successfully");

      navigate("/ships");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
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
      <h2>Edit Ship</h2>

      <form onSubmit={updateShip}>
        <input
          type="text"
          name="ship_name"
          value={ship.ship_name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="source"
          value={ship.source}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="destination"
          value={ship.destination}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="available_seats"
          value={ship.available_seats}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="price"
          value={ship.price}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Ship
        </button>
      </form>
    </div>
  );
}

export default EditShip;