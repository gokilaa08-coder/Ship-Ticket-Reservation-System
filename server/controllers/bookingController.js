const bookingModel = require("../models/bookingModel");
const shipModel = require("../models/shipModel");

// Book Ticket
const bookTicket = (req, res) => {
  const userId = req.user.id;
  const { shipId, passengers } = req.body;

  shipModel.getShipById(shipId, (err, ships) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (ships.length === 0) {
      return res.status(404).json({
        message: "Ship not found",
      });
    }

    const ship = ships[0];

    if (ship.available_seats < passengers) {
      return res.status(400).json({
        message: "Not enough seats available",
      });
    }

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

        shipModel.updateSeats(shipId, passengers, (err) => {
          if (err) {
            return res.status(500).json({
              message: "Seat Update Failed",
            });
          }

          res.status(201).json({
            message: "Ticket Booked Successfully",
            bookingId: result.insertId,
          });
        });
      }
    );
  });
};

// My Bookings
const getMyBookings = (req, res) => {
  const userId = req.user.id;
    console.log("Logged in User ID:", userId);

  bookingModel.getBookingsByUser(userId, (err, results) => {
    console.log("Bookings:", results);
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch bookings",
      });
    }

    res.status(200).json(results);
  });
};

// Cancel Booking
const cancelBooking = (req, res) => {
  const bookingId = req.params.id;

  bookingModel.getBookingById(bookingId, (err, bookings) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (bookings.length === 0) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    const booking = bookings[0];

    bookingModel.deleteBooking(bookingId, (err) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to cancel booking",
        });
      }

      shipModel.restoreSeats(
        booking.ship_id,
        booking.passengers,
        (err) => {
          if (err) {
            return res.status(500).json({
              message: "Seat restore failed",
            });
          }

          res.status(200).json({
            message: "Booking Cancelled Successfully",
          });
        }
      );
    });
  });
};

module.exports = {
  bookTicket,
  getMyBookings,
  cancelBooking,
};