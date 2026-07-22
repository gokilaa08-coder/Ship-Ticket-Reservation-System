import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
import "./Booking.css";

function Booking() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seats: 1,
    journeyDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first!");
      return;
    }

    await API.post("/bookings", {
      userId: user.id,
      shipId: Number(id),
      passengerName: formData.name,
      phone: formData.phone,
      travelDate: formData.journeyDate,
      passengers: Number(formData.seats),
    });

    alert("🎉 Booking Successful!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      seats: 1,
      journeyDate: "",
    });

  } catch (err) {
    console.log(err);

    alert(
      err.response?.data?.message || "Booking Failed"
    );
  }
};

  return (
    <div className="booking-page">

      <h1>🚢 Book Your Journey</h1>

      <p>Booking Ship ID : {id}</p>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Passenger Name"
          value={formData.name}
          onChange={handleChange}
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="seats"
          min="1"
          value={formData.seats}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="journeyDate"
          value={formData.journeyDate}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Confirm Booking
        </button>

      </form>

    </div>
  );
}

export default Booking;