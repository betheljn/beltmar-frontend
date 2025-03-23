"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await fetch("http://localhost:4000/auth/me", {
            method: "GET",
            credentials: "include", // Ensures cookies are sent with the request
          });

          if (res.ok) {
            setIsAuthenticated(true);
          } else {
            router.push("/auth/login"); // Redirect to login if not authenticated
          }
        } catch (error) {
          console.error("❌ Authentication check failed:", error);
          router.push("/auth/login");
        } finally {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    if (loading) {
      return <p>Loading...</p>; // Display a loading message while checking auth
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
