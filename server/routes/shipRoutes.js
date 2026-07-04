const express = require("express");
const router = express.Router();

const { getShips } = require("../controllers/shipController");

router.get("/", getShips);

module.exports = router;