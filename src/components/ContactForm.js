"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Paper,
  Stack,
} from "@mui/material";
import { useAddLeadMutation } from "@/api/crmApi";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [addLead, { isLoading, isSuccess, isError }] = useAddLeadMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addLead({
        ...formData,
        ownerId: "demo-owner-id",
        ownerEmail: formData.email,
      }).unwrap();

      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error("❌ Lead submission error:", err);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "background.default",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          mx: "auto",
          p: 5,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <ContactMailIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h5" fontWeight="bold">
            Get in Touch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We’d love to learn more about your business. Send us a quick message and we’ll reach out.
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <Stack spacing={2}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{ borderRadius: 2 }}
            />
            <TextField
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="phone"
              label="Phone"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isLoading}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                mt: 1,
              }}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
            </Button>
          </Stack>
        </form>

        {isSuccess && (
          <Alert sx={{ mt: 3 }} severity="success">
            Your message has been sent!
          </Alert>
        )}
        {isError && (
          <Alert sx={{ mt: 3 }} severity="error">
            Oops! Something went wrong. Try again.
          </Alert>
        )}
      </Paper>
    </Box>
  );
}



