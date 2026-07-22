const shipModel = require("../models/shipModel");

// Get All Ships
const getShips = (req, res) => {
  shipModel.getAllShips((err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch ships",
      });
    }

    res.status(200).json(results);
  });
};

// ⭐ Get Single Ship
const getShipById = (req, res) => {
  const { id } = req.params;

  shipModel.getShipById(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch ship",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Ship not found",
      });
    }

    res.json(results[0]);
  });
};

// Add Ship
const addShip = (req, res) => {
  const {
    ship_name,
    source,
    destination,
    departure_time,
    arrival_time,
    available_seats,
    price,
    image,
  } = req.body;

  shipModel.addShip(
    {
      ship_name,
      source,
      destination,
      departure_time,
      arrival_time,
      available_seats,
      price,
      image,
    },
    (err) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Failed to add ship",
        });
      }

      res.status(201).json({
        message: "Ship Added Successfully",
      });
    }
  );
};

// Delete Ship
const deleteShip = (req, res) => {
  const { id } = req.params;

  shipModel.deleteShip(id, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to delete ship",
      });
    }

    res.status(200).json({
      message: "Ship Deleted Successfully",
    });
  });
};

// Update Ship
const updateShip = (req, res) => {
  const { id } = req.params;

  const {
    ship_name,
    source,
    destination,
    departure_time,
    arrival_time,
    available_seats,
    price,
    image,
  } = req.body;

  shipModel.updateShip(
    id,
    {
      ship_name,
      source,
      destination,
      departure_time,
      arrival_time,
      available_seats,
      price,
      image,
    },
    (err) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Failed to update ship",
        });
      }

      res.status(200).json({
        message: "Ship Updated Successfully",
      });
    }
  );
};

module.exports = {
  getShips,
  getShipById,
  addShip,
  deleteShip,
  updateShip,
};