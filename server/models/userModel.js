const db = require("../config/db");

// Register User
const createUser = (name, email, password, callback) => {
  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], callback);
};

// Login User
const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], callback);
};

// Get All Users
const getAllUsers = (callback) => {
  const sql = "SELECT id, name, email FROM users";

  db.query(sql, callback);
};

module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
};