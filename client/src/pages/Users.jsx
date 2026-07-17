import { useEffect, useState } from "react";
import API from "../services/api";
import AdminSidebar from "../components/AdminSidebar";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load users");
    }
  };

  return (
    <>
      <AdminSidebar />

      <div
        style={{
          marginLeft: "250px",
          padding: "30px",
          background: "#f4f7fb",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ color: "#0d6efd" }}>👤 Registered Users</h1>

        <table
          style={{
            width: "100%",
            marginTop: "30px",
            borderCollapse: "collapse",
            background: "#fff",
            boxShadow: "0 5px 10px rgba(0,0,0,0.15)",
          }}
        >
          <thead>
            <tr style={{ background: "#0d6efd", color: "white" }}>
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.id}
                </td>

                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.name}
                </td>

                <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;