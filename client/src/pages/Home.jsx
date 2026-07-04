import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/message")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h1>🚢 Ship Ticket Reservation System</h1>

        <p>{message}</p>

        <Link to="/ships">
          <button>Book Now</button>
        </Link>
      </div>
    </>
  );
}

export default Home;