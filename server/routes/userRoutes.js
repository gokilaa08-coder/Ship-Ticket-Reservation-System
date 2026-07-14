const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getAllUsers,
} = require("../controllers/userController");

const verifyToken = require("../middleware/authMiddleware");

// User Authentication
router.post("/register", registerUser);
router.post("/login", loginUser);

// User Profile
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

// Admin - Get All Users
router.get("/", getAllUsers);

module.exports = router;