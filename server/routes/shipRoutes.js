const express = require("express");
const router = express.Router();

const {
  getShips,
  getShipById,
  addShip,
  deleteShip,
  updateShip,
} = require("../controllers/shipController");

// Get All Ships
router.get("/", getShips);

// ⭐ Get Single Ship
router.get("/:id", getShipById);

// Add Ship
router.post("/", addShip);

// Update Ship
router.put("/:id", updateShip);

// Delete Ship
router.delete("/:id", deleteShip);

module.exports = router;