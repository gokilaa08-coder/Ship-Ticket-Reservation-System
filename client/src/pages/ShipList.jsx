import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function ShipList() {
  const [ships, setShips] = useState([]);
  const [filteredShips, setFilteredShips] = useState([]);

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    fetchShips();
  }, []);

  const fetchShips = async () => {
    try {
      const res = await API.get("/ships");

      setShips(res.data);
      setFilteredShips(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load ships");
    }
  };

  const searchShips = () => {
    const result = ships.filter((ship) => {
      return (
        ship.source.toLowerCase().includes(source.toLowerCase()) &&
        ship.destination.toLowerCase().includes(destination.toLowerCase())
      );
    });

    setFilteredShips(result);
  };

  const clearSearch = () => {
    setSource("");
    setDestination("");
    setFilteredShips(ships);
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d6efd",
          marginBottom: "30px",
        }}
      >
        🚢 Available Ships
      </h1>

      {/* Search Box */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{
            padding: "10px",
            width: "180px",
            borderRadius: "5px",
          }}
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{
            padding: "10px",
            width: "180px",
            borderRadius: "5px",
          }}
        />

        <button
          onClick={searchShips}
          style={{
            background: "#0d6efd",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>

        <button
          onClick={clearSearch}
          style={{
            background: "#6c757d",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      {/* Ship Cards */}

      {filteredShips.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No Ships Found 🚢</h2>
      ) : (
        filteredShips.map((ship) => (
          <div
            key={ship.id}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#0d6efd" }}>{ship.ship_name}</h2>

            <p>
              <strong>📍 From:</strong> {ship.source}
            </p>

            <p>
              <strong>🏁 To:</strong> {ship.destination}
            </p>

            <p>
              <strong>💺 Available Seats:</strong>{" "}
              {ship.available_seats}
            </p>

            <p>
              <strong>💰 Price:</strong> ₹
              {ship.price || 2500}
            </p>

            <Link to={`/booking/${ship.id}`}>
              <button
                style={{
                  background: "#198754",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Book Now
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ShipList;