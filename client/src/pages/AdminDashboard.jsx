import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const [stats, setStats] =useState({
    totalShips: 0,
    totalUsers: 0,
    totalBookings: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/admin/dashboard");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const chartData = {
    labels: ["Ships", "Users", "Bookings"],
    datasets: [
      {
        label: "System Statistics",
        data: [
          stats.totalShips,
          stats.totalUsers,
          stats.totalBookings,
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <AdminSidebar />

      <div
        style={{
          marginLeft: "250px",
          padding: "30px",
          background: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "#0d6efd" }}>
          📊 Admin Dashboard
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={card}>
            <h2>🚢</h2>
            <h3>{stats.totalShips}</h3>
            <p>Total Ships</p>
          </div>

          <div style={card}>
            <h2>👤</h2>
            <h3>{stats.totalUsers}</h3>
            <p>Total Users</p>
          </div>

          <div style={card}>
            <h2>🎫</h2>
            <h3>{stats.totalBookings}</h3>
            <p>Total Bookings</p>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            marginTop: "40px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>System Overview</h2>

          <Bar
            data={chartData}
            options={chartOptions}
          />
        </div>
      </div>
    </>
  );
}

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "220px",
  textAlign: "center",
  boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
};

export default AdminDashboard;