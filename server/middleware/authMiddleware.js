const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("Authorization Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({
      message: "No Token",
    });
  }

  const token = authHeader.split(" ")[1];

  console.log("Received Token:", token);

  try {
    const decoded = jwt.verify(token, "mysecretkey");

    console.log("✅ Decoded User:", decoded);

    req.user = decoded;

    next();
  } catch (err) {
    console.log("❌ JWT Error:", err);

    return res.status(401).json({
      message: err.message,
    });
  }
};

module.exports = verifyToken;