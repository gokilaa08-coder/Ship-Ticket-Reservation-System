const db = require("../config/db");

const getAllShips = (callback) => {
  db.query("SELECT * FROM ships", callback);
};

const getShipById = (id, callback) => {
  db.query("SELECT * FROM ships WHERE id = ?", [id], callback);
};

const updateSeats = (shipId, seats, callback) => {
  db.query(
    "UPDATE ships SET available_seats = available_seats - ? WHERE id = ?",
    [seats, shipId],
    callback
  );
};

const restoreSeats = (shipId, seats, callback) => {
  db.query(
    "UPDATE ships SET available_seats = available_seats + ? WHERE id = ?",
    [seats, shipId],
    callback
  );
};

module.exports = {
  getAllShips,
  getShipById,
  updateSeats,
  restoreSeats,
};