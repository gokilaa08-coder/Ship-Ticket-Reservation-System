const db = require("../config/db");

// Create Booking
const createBooking = (
  userId,
  shipId,
  passengerName,
  phone,
  travelDate,
  passengers,
  callback
) => {
  const sql = `
    INSERT INTO bookings
    (
      user_id,
      ship_id,
      passenger_name,
      phone,
      travel_date,
      passengers
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      userId,
      shipId,
      passengerName,
      phone,
      travelDate,
      passengers,
    ],
    callback
  );
};

// Get Bookings By User
const getBookingsByUser = (userId, callback) => {
  const sql = `
    SELECT
      bookings.*,
      ships.ship_name,
      ships.source,
      ships.destination,
      ships.price
    FROM bookings
    JOIN ships
      ON bookings.ship_id = ships.id
    WHERE bookings.user_id = ?
    ORDER BY bookings.booking_date DESC
  `;

  db.query(sql, [userId], callback);
};

// Get All Bookings (Admin)
const getAllBookings = (callback) => {
  const sql = `
    SELECT
      bookings.id,
      users.name,
      users.email,
      bookings.passenger_name,
      bookings.phone,
      bookings.travel_date,
      bookings.passengers,
      bookings.booking_date,
      ships.ship_name,
      ships.source,
      ships.destination
    FROM bookings
    JOIN users
      ON bookings.user_id = users.id
    JOIN ships
      ON bookings.ship_id = ships.id
    ORDER BY bookings.booking_date DESC
  `;

  db.query(sql, callback);
};

// Delete Booking
const deleteBooking = (bookingId, callback) => {
  db.query(
    "DELETE FROM bookings WHERE id = ?",
    [bookingId],
    callback
  );
};

module.exports = {
  createBooking,
  getBookingsByUser,
  getAllBookings,
  deleteBooking,
};