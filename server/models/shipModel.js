
const db = require("../config/db");

// Get All Ships
const getAllShips = (callback) => {
  db.query("SELECT * FROM ships ORDER BY id DESC", callback);
};

// Get Ship By ID
const getShipById = (id, callback) => {
  db.query("SELECT * FROM ships WHERE id = ?", [id], callback);
};

// Update Available Seats After Booking
const updateSeats = (shipId, seats, callback) => {
  db.query(
    "UPDATE ships SET available_seats = available_seats - ? WHERE id = ?",
    [seats, shipId],
    callback
  );
};

// Restore Seats After Cancellation
const restoreSeats = (shipId, seats, callback) => {
  db.query(
    "UPDATE ships SET available_seats = available_seats + ? WHERE id = ?",
    [seats, shipId],
    callback
  );
};

// Add New Ship
const addShip = (ship, callback) => {
  const sql = `
    INSERT INTO ships
    (
      ship_name,
      source,
      destination,
      departure_time,
      arrival_time,
      available_seats,
      price,
      image
   )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      ship.ship_name,
      ship.source,
      ship.destination,
      ship.departure_time,
      ship.arrival_time,
      ship.available_seats,
      ship.price,
      ship.image,
    ],
    callback
  );
};

// Delete Ship
const deleteShip = (id, callback) => {
  db.query(
    "DELETE FROM ships WHERE id = ?",
    [id],
    callback
  );
};

// Update Ship
const updateShip = (id, ship, callback) => {
  const sql = `
    UPDATE ships
    SET
      ship_name = ?,
      source = ?,
      destination = ?,
      departure_time = ?,
      arrival_time = ?,
      available_seats = ?,
      price = ?
      image = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      ship.ship_name,
      ship.source,
      ship.destination,
      ship.departure_time,
      ship.arrival_time,
      ship.available_seats,
      ship.price,
      ship.image,
      id,
    ],
    callback
  );
};

module.exports = {
  getAllShips,
  getShipById,
  updateSeats,
  restoreSeats,
  addShip,
  deleteShip,
  updateShip,
};

