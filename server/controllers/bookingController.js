const bookingModel = require("../models/bookingModel");

// Create Booking
const createBooking = (req, res) => {
  const { userId, shipId, passengers } = req.body;

  bookingModel.createBooking(
    userId,
    shipId,
    passengers,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Booking Failed",
        });
      }

      res.status(201).json({
        message: "Booking Successful",
      });
    }
  );
};

// User Bookings
const getUserBookings = (req, res) => {
  const userId = req.params.userId;

  bookingModel.getBookingsByUser(userId, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    res.status(200).json(results);
  });
};

// ⭐ Logged-in User Bookings
const getMyBookings = (req, res) => {
  const userId = req.user.id;

  bookingModel.getBookingsByUser(userId, (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    res.status(200).json(results);
  });
};

// Delete Booking
const deleteBooking = (req, res) => {
  const bookingId = req.params.id;

  bookingModel.deleteBooking(bookingId, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Delete Failed",
      });
    }

    res.json({
      message: "Booking Deleted Successfully",
    });
  });
};

// Admin - Get All Bookings
const getAllBookings = (req, res) => {
  bookingModel.getAllBookings((err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    res.status(200).json(results);
  });
};

module.exports = {
  createBooking,
  getUserBookings,
  getMyBookings,
  deleteBooking,
  getAllBookings,
};