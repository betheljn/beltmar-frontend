"use client";

import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import withAuth from "@/hoc/withAuth";

function Dashboard() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/auth/logout", {
        method: "POST",
        credentials: "include", // Ensure cookies are cleared
      });

      dispatch(logout()); // Clear Redux state
    } catch (error) {
      console.error("❌ Logout failed:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome! You are logged in.</p>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default withAuth(Dashboard);

