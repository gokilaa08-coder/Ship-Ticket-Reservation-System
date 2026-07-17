import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../services/api";

import "./Login.css";

import background from "../assets/images/background.jpg";
import shipLogo from "../assets/icons/ship-logo.png";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/login", {
        email,
        password,
      });
      console.log("Login Response:", res.data);

      // Save JWT
      localStorage.setItem("token", res.data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful!");

      navigate("/");
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="left-side">
        <div className="glass-card">

          <img
            src={shipLogo}
            alt="Ship"
            className="ship-logo"
          />

          <h1>Welcome Back 👋</h1>

          <p>Sign in to continue your journey</p>

          <form onSubmit={handleLogin}>

            <label>Email</label>

            <div className="input-box">
              <FaEnvelope className="icon"/>

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <FaLock className="icon"/>

              <input
                type={showPassword?"text":"password"}
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <span
                className="eye"
                onClick={()=>setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
              </span>

            </div>

            <button className="login-btn">
              Login →
            </button>

          </form>

          <p className="register">
            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </p>

        </div>
      </div>

      <div className="right-side">

        <h1 className="title">
          SHIP TICKET
        </h1>

        <h2 className="subtitle">
          RESERVATION
        </h2>

        <p className="tagline">
          Sail Smarter.
          <span> Book Faster.</span>
        </p>

      </div>

    </div>
  );
}

export default Login;