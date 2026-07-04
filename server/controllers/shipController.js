const shipModel = require("../models/shipModel");

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

module.exports = {
  getShips,
};