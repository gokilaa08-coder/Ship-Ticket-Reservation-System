const db = require("../config/db");

const findAdminByEmail = (email, callback) => {
  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    callback
  );
};

const getDashboardStats = (callback) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM ships) AS totalShips,
      (SELECT COUNT(*) FROM users) AS totalUsers,
      (SELECT COUNT(*) FROM bookings) AS totalBookings
  `;

  db.query(sql, callback);
};
module.exports = {
  findAdminByEmail,
  getDashboardStats,
};