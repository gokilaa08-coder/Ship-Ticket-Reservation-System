const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const shipRoutes = require("./routes/shipRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/ships", shipRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Ship Reservation Backend Running 🚢");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});