"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "@/redux/slices/authSlice";
import { useLoginMutation } from "@/api/authApi";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  CircularProgress,
  Paper,
  useTheme,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  Slide,
} from "@mui/material";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [login, { isLoading }] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);

  const isLight = theme.palette.mode === "light";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password, rememberMe });
      const data = response.data;

      if (data?.token) {
        dispatch(setToken(data.token));
        dispatch(setUser({ email }));
        router.push("/dashboard");
      } else {
        setError("Login failed. Try again.");
        setErrorOpen(true);
      }
    } catch (err) {
      const msg =
        err?.error?.data?.message || err?.data?.message || "Login failed.";
      setError(msg);
      setErrorOpen(true);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
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
                : "linear-gradient(to right, #1e1e1e, #2a2a2a)",
              color: isLight ? "text.primary" : "#f0f0f0",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>
            <Typography
              variant="subtitle1"
              color={isLight ? "text.secondary" : "grey.400"}
              mb={4}
            >
              Log in to your account
            </Typography>

            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
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

              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember Me"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={isLoading}
                sx={{ fontWeight: 600 }}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </Box>

            <Typography variant="body2" mt={4}>
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none", ml: 1 }}
                >
                  Sign Up
                </Button>
              </Link>
            </Typography>
          </Paper>
        </Slide>
      </Container>

      <Footer />

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




