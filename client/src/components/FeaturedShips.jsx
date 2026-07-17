import "./FeaturedShips.css";

const ships = [
  {
    id: 1,
    name: "Ocean Star",
    route: "Chennai → Goa",
    price: 2999,
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    name: "Blue Pearl",
    route: "Kochi → Lakshadweep",
    price: 3999,
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    name: "Sea Queen",
    route: "Mumbai → Goa",
    price: 2499,
    image: "https://picsum.photos/400/250?random=3",
  },
];

function FeaturedShips() {
  return (
    <section className="featured">
      <h2>Featured Ships</h2>

      <div className="ship-container">
        {ships.map((ship) => (
          <div className="ship-card" key={ship.id}>
            <img src={ship.image} alt={ship.name} />

            <h3>{ship.name}</h3>

            <p>{ship.route}</p>

            <h4>₹{ship.price}</h4>

            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedShips;