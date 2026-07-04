const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("Authorization Header:", req.headers.authorization);

  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

const token = authHeader.split(" ")[1];

console.log("Token:", token);

  if (!authHeader) {
    return res.status(401).json({
      message: "Access Denied. No Token Provided.",
    });
  }

  
  console.log("Received Token:", token);

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    console.log("Decoded:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
  console.log("JWT Error:", error);

  return res.status(401).json({
    message: "Invalid Token",
    error: error.message,
  });
}
};

module.exports = verifyToken;