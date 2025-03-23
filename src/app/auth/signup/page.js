"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  CircularProgress,
  Paper,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { useSignupMutation } from "@/api/authApi";
import { setUser, setToken } from "@/redux/slices/authSlice";

export default function SignUpPage() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const router = useRouter();
  const dispatch = useDispatch();

  const [signUp] = useSignupMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setErrorOpen(true);
      setIsLoading(false);
      return;
    }

    try {
      const data = await signUp({ email, password }).unwrap();

      if (data?.user) {
        dispatch(setUser({ email: data.user.email }));
        dispatch(setToken(data.token)); // ✅ <-- Add this line
        setSuccessOpen(true);

        // Optional: reset form
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");

        // Redirect after a delay
        setTimeout(() => router.push("/dashboard"), 2000);
      } else {
        setError("Signup failed. Please try again.");
        setErrorOpen(true);
      }
    } catch (err) {
      console.error("🛑 Signup error full object:", JSON.stringify(err, null, 2));

      const errorMessage = err?.error?.data?.message || err?.data?.message;

      const msg =
        errorMessage === "Email is already in use"
          ? "Email already exists. Try logging in instead."
          : errorMessage || "Something went wrong.";

      setError(msg);
      setErrorOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <FadeInOnScroll>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            mt: 10,
            mb: 10,
            mx: "auto",
            borderRadius: 3,
            textAlign: "center",
            background: isLight
              ? "linear-gradient(to right, #e3f2fd, #ffffff)"
              : "linear-gradient(to right, #121212, #1e1e1e)",
            color: isLight ? "text.primary" : "#f0f0f0",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: isLight ? "text.primary" : "#f0f0f0" }}
          >
            Create Account
          </Typography>
          <Typography
            variant="subtitle1"
            mb={4}
            sx={{ color: isLight ? "text.secondary" : "#c0c0c0" }}
          >
            Sign up to get started
          </Typography>

          <Box
            component="form"
            onSubmit={handleSignUp}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField
              label="Full Name"
              type="text"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </Box>

          <Typography variant="body2" mt={4}>
            Already have an account?{" "}
            <Link href="/auth/login" passHref>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none", ml: 1 }}
              >
                Login
              </Button>
            </Link>
          </Typography>
        </Paper>
        </FadeInOnScroll>
      </Container>
      <FadeInOnScroll>
      <Footer />
      </FadeInOnScroll>

      {/* ✅ Snackbar Notifications */}
      <Snackbar
        open={successOpen}
        autoHideDuration={4000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          🎉 Account created! Redirecting...
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorOpen}
        autoHideDuration={5000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setErrorOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}




