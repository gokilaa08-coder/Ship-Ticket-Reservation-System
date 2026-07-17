import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-small">
          🌊 Welcome to India's Premium Ship Booking Platform
        </p>

        <h1>
          Book Your <span>Ocean Journey</span>
        </h1>

        <p className="hero-description">
          Luxury cruises, island adventures, and unforgettable voyages.
          Reserve your perfect ship in just a few clicks and enjoy a
          safe, comfortable, and memorable travel experience.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Book Now</button>
          <button className="btn-secondary">Explore Ships</button>
        </div>

      </div>
    </section>
  );
}

export default Hero;