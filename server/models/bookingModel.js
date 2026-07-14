const db = require("../config/db");

// Create Booking
const createBooking = (userId, shipId, passengers, callback) => {
  const sql =
    "INSERT INTO bookings (user_id, ship_id, passengers) VALUES (?, ?, ?)";

  db.query(sql, [userId, shipId, passengers], callback);
};

// User's Bookings
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

// Get Booking by ID
const getBookingById = (bookingId, callback) => {
  const sql = "SELECT * FROM bookings WHERE id = ?";

  db.query(sql, [bookingId], callback);
};

// Delete Booking
const deleteBooking = (bookingId, callback) => {
  const sql = "DELETE FROM bookings WHERE id = ?";

  db.query(sql, [bookingId], callback);
};

// ⭐ Admin - Get All Bookings
const getAllBookings = (callback) => {
  const sql = `
    SELECT
      bookings.id,
      users.name,
      users.email,
      ships.ship_name,
      ships.source,
      ships.destination,
      bookings.passengers,
      bookings.booking_date
    FROM bookings
    JOIN users ON bookings.user_id = users.id
    JOIN ships ON bookings.ship_id = ships.id
    ORDER BY bookings.booking_date DESC
  `;

  db.query(sql, callback);
};

module.exports = {
  createBooking,
  getBookingsByUser,
  getBookingById,
  deleteBooking,
  getAllBookings,
};