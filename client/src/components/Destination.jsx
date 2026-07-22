import "./Destination.css";

import goa from "../assets/destinations/goa.jpg";
import lakshadweep from "../assets/destinations/lakshadweep.jpg";
import andaman from "../assets/destinations/andaman.jpg";

const destinations = [
  {
    id: 1,
    name: "Goa",
    image: goa,
    rating: "★★★★★",
    price: "Starting from ₹2,999",
  },
  {
    id: 2,
    name: "Lakshadweep",
    image: lakshadweep,
    rating: "★★★★★",
    price: "Starting from ₹4,999",
  },
  {
    id: 3,
    name: "Andaman Islands",
    image: andaman,
    rating: "★★★★★",
    price: "Starting from ₹6,999",
  },
];

function Destination() {
  return (
    <section className="destination">

      <h2>Popular Destinations</h2>

      <p className="destination-subtitle">
        Discover India's most beautiful cruise destinations.
      </p>

      <div className="destination-grid">

        {destinations.map((place) => (

          <div className="destination-card" key={place.id}>

            <img
              src={place.image}
              alt={place.name}
            />

            <div className="destination-info">

              <h3>{place.name}</h3>

              <p className="rating">
                {place.rating}
              </p>

              <p className="price">
                {place.price}
              </p>

              <button>
                Explore
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Destination;