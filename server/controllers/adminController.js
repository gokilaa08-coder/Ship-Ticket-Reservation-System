const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

// Admin Login
const adminLogin = (req, res) => {
  const { email, password } = req.body;

  adminModel.findAdminByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    const admin = results[0];

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },
      "mysecretkey",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Admin Login Successful",
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  });
};

// Dashboard Statistics
const getDashboardStats = (req, res) => {
  adminModel.getDashboardStats((err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to load dashboard",
        error: err.message,
     });
    }

    res.status(200).json(result[0]);
  });
};

module.exports = {
  adminLogin,
  getDashboardStats,
};