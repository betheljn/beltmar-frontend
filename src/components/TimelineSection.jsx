"use client";

import { Box, Typography, Grid, useTheme } from "@mui/material";
import FadeItem from "@/components/FadeItem";

// Icons
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const steps = [
  {
    icon: <ConnectWithoutContactIcon fontSize="large" color="primary" />,
    title: "Connect Platforms",
    description:
      "Integrate your existing tools, CRMs, and ad platforms into one intelligent system—ready to analyze and act.",
  },
  {
    icon: <UploadFileIcon fontSize="large" color="primary" />,
    title: "Upload Creatives",
    description:
      "Drop in your graphics, videos, or copy assets and let our AI instantly start testing and learning.",
  },
  {
    icon: <TrackChangesIcon fontSize="large" color="primary" />,
    title: "Define Audience & Goals",
    description:
      "Choose from preset goals or build custom KPIs while our engine maps optimal audience pathways.",
  },
  {
    icon: <SmartToyIcon fontSize="large" color="primary" />,
    title: "Launch & Optimize",
    description:
      "With real-time optimization and predictive modeling, your campaigns evolve as results unfold.",
  },
];

export default function TimelineSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        py: 12,
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    >

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          align="center"
          mb={4}
        >
          How It Works
        </Typography>

        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            mx: "auto",
            px: 2,
          }}
        >
          {/* CONNECTOR LINE */}
          <Box
            sx={{
              position: "absolute",
              top: 48,
              left: 0,
              right: 0,
              height: "2px",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(to right, #2196f3, #21cbf3)"
                  : "linear-gradient(to right, #64b5f6, #81d4fa)",
              zIndex: -1,
              display: { xs: "none", md: "block" },
              transform: "translateY(24px)",
              opacity: 0.3,
            }}
          />

          <Grid container spacing={4} justifyContent="center">
            {steps.map((step, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <FadeItem delay={i * 0.1}>
                  <Box textAlign="center" px={2}>
                    <Box mb={1}>{step.icon}</Box>
                    <Typography fontWeight={600} gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "0.95rem" }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </FadeItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
