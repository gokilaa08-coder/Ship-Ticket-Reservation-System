import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🚢 Ship Reservation</h2>
          <p>
            Experience luxury ocean journeys with safe,
            fast, and reliable ship ticket booking.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/ships">Ships</a>
          <a href="/mybookings">My Bookings</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@shipreservation.com</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Ship Reservation | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;