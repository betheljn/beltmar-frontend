"use client";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

export default function Contact() {
  const theme = useTheme();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          py: 8,
          gap: 6,
          background: theme.palette.mode === "light"
            ? "linear-gradient(to bottom, #ffffff, #f5f5f5)"
            : theme.palette.background.default,
        }}
      >
        {/* Heading */}
        <FadeInOnScroll>
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            Contact Us
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            textAlign="center"
            maxWidth="600px"
            mt={1}
          >
            We’d love to hear from you! Whether you have a question about our services or need support—our team is ready to help.
          </Typography>
        </FadeInOnScroll>

        {/* Form */}
        <FadeInOnScroll>
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "80%",
              sm: "60%",
              md: "40%",
            },
            aspectRatio: "3 / 2",
            mx: "auto",
            my: 4,
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/contact-us.jpg"
            alt="Contact Team Illustration"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 600px) 80vw, (max-width: 960px) 60vw, 40vw"
          />
        </Box>
          <Box width="100%" maxWidth="600px">
            <ContactForm />
          </Box>
        </FadeInOnScroll>

        {/* Divider */}
        <Divider sx={{ width: "60px", borderColor: "primary.main" }} />

        {/* Contact Info */}
        <FadeInOnScroll>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            gap={4}
            textAlign="center"
          >
            <Box>
              <EmailIcon color="primary" fontSize="large" />
              <Typography variant="body1">support@beltmar.com</Typography>
            </Box>
            <Box>
              <PhoneIcon color="primary" fontSize="large" />
              <Typography variant="body1">(678) 758-5464</Typography>
            </Box>
            <Box>
              <LocationOnIcon color="primary" fontSize="large" />
              <Typography variant="body1">Atlanta, GA</Typography>
            </Box>
          </Box>
        </FadeInOnScroll>
      </Box>

      <Footer />
    </Box>
  );
}



