const express = require("express");
const router = express.Router();

const {
  getShips,
  addShip,
  deleteShip,
  updateShip,
} = require("../controllers/shipController");

router.get("/", getShips);

router.post("/", addShip);

router.delete("/:id", deleteShip);

router.put("/:id", updateShip);

module.exports = router;