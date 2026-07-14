const express = require("express");
const router = express.Router();

const {
  adminLogin,
  getDashboardStats,
} = require("../controllers/adminController");

router.post("/login", adminLogin);

router.get("/dashboard", getDashboardStats);

module.exports = router;