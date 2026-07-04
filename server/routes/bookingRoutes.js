const express = require("express");
const router = express.Router();

const {
  bookTicket,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookingController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, bookTicket);

router.get("/my", verifyToken, getMyBookings);

router.delete("/:id", verifyToken, cancelBooking);

module.exports = router;