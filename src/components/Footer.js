"use client";

import { Box, Typography, IconButton, Stack, Link as MuiLink } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[900],
        color: (theme) => theme.palette.getContrastText(theme.palette.grey[900]),
        py: 5,
        px: 2,
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
      Empower your brand with AI-Powered Insights & Human Creativity.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/company/beltmarmarketing"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/beltmarmarketing"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/beltmaragency"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <TwitterIcon />
        </IconButton>
      </Stack>

      <Typography variant="body2" gutterBottom>
        Contact us at{" "}
        <MuiLink href="mailto:support@beltmar.com" color="inherit" underline="hover">
          support@beltmar.com
        </MuiLink>
      </Typography>

      <Typography variant="body2" color="primary" mt={1}>
        &copy; {new Date().getFullYear()} Beltmar Marketing. All rights reserved.
      </Typography>
    </Box>
  );
}



  