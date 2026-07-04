const db = require("../config/db");

const createBooking = (userId, shipId, passengers, callback) => {
  const sql =
    "INSERT INTO bookings (user_id, ship_id, passengers) VALUES (?, ?, ?)";

  db.query(sql, [userId, shipId, passengers], callback);
};

const getBookingsByUser = (userId, callback) => {
  const sql = `
    SELECT
      bookings.id,
      ships.ship_name,
      ships.source,
      ships.destination,
      bookings.passengers,
      bookings.booking_date
    FROM bookings
    JOIN ships
    ON bookings.ship_id = ships.id
    WHERE bookings.user_id = ?
    ORDER BY bookings.booking_date DESC
  `;

  db.query(sql, [userId], callback);
};

const getBookingById = (bookingId, callback) => {
  const sql = "SELECT * FROM bookings WHERE id = ?";

  db.query(sql, [bookingId], callback);
};

const deleteBooking = (bookingId, callback) => {
  const sql = "DELETE FROM bookings WHERE id = ?";

  db.query(sql, [bookingId], callback);
};

module.exports = {
  createBooking,
  getBookingsByUser,
  getBookingById,
  deleteBooking,
};