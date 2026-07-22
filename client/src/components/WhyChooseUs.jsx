import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">
      <h2>Why Choose Us?</h2>
      <p className="why-subtitle">
        Experience luxury, comfort, and hassle-free booking.
      </p>

      <div className="why-container">

        <div className="why-card">
          <div className="icon">🛡️</div>
          <h3>Safe Booking</h3>
          <p>
            Secure online payment with trusted booking services.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">🚢</div>
          <h3>Luxury Ships</h3>
          <p>
            Travel in premium cruise ships with world-class facilities.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">⚡</div>
          <h3>Instant Confirmation</h3>
          <p>
            Get your tickets confirmed immediately after payment.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">📞</div>
          <h3>24/7 Support</h3>
          <p>
            Our customer support team is available anytime.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;