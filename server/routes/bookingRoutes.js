const express = require("express");
const router = express.Router();

const {
  createBooking,
  getUserBookings,
  getMyBookings,
  deleteBooking,
  getAllBookings,
} = require("../controllers/bookingController");

const verifyToken = require("../middleware/authMiddleware");

// Create Booking
router.post("/", createBooking);

// Logged-in User Bookings
router.get("/my", verifyToken, getMyBookings);

// Old Route (optional)
router.get("/user/:userId", getUserBookings);

// Delete Booking
router.delete("/:id", deleteBooking);

// Admin
router.get("/", getAllBookings);

module.exports = router;