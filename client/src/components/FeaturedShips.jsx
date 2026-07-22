import "./FeaturedShips.css";

import oceanStar from "../assets/ships/ocean-star.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FeaturedShips() {

  const [ships, setShips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ships")
      .then((res) => {
        setShips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="featured">
      <h2>Featured Ships</h2>
      <p>Choose your next luxury ocean journey.</p>

      <div className="ship-grid">
        {ships.map((ship) => (
          <div className="ship-card" key={ship.id}>

            {/* Default image for now */}
            <img src={oceanStar} alt={ship.ship_name} />

            <div className="ship-info">
              <h3>{ship.ship_name}</h3>

              <p>
                📍 {ship.source} → {ship.destination}
              </p>

              <p className="seats">
                🪑 Available Seats: <strong>{ship.available_seats}</strong>
              </p>
              <h4>₹ {ship.price}</h4>

             <button
                onClick={() => navigate(`/booking/${ship.id}`)}
             > 
                Book Now
             </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedShips;