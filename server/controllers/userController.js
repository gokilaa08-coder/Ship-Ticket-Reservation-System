const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    userModel.createUser(name, email, hashedPassword, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Registration Failed",
          error: err,
        });
      }

      res.status(201).json({
        message: "User Registered Successfully",
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const loginUser = (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Email:", email);
    console.log("Entered Password:", password);
    console.log("Stored Password:", user.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
    const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
  },
  "mysecretkey",
  {
    expiresIn: "1h",
  }
);


    res.status(200).json({
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
     },
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
};