"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import FadeItem from "@/components/FadeItem";
import Image from "next/image";
import TimelineSection from "@/components/TimelineSection";

// Icons
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import InsightsIcon from "@mui/icons-material/Insights";
import BarChartIcon from "@mui/icons-material/BarChart";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TimelineIcon from "@mui/icons-material/Timeline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import BoltIcon from "@mui/icons-material/Bolt";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ShieldIcon from "@mui/icons-material/Shield";
import VerifiedIcon from "@mui/icons-material/Verified";

const features = [
  {
    title: "Advanced Targeting Capabilities",
    description:
      "Reach your ideal audience through behavior, interest, and psychographic targeting, reducing wasted ad spend.",
    icon: <QueryStatsIcon color="primary" fontSize="large" />,
  },
  {
    title: "AI-Driven Creative Optimization",
    description:
      "Our models automatically test and improve your ad creatives in real-time for maximum engagement.",
    icon: <AutoAwesomeIcon color="primary" fontSize="large" />,
  },
  {
    title: "Predictive Performance Modeling",
    description:
      "Forecast campaign performance before launch with our proprietary prediction engine.",
    icon: <TimelineIcon color="primary" fontSize="large" />,
  },
  {
    title: "Cross-Channel Orchestration",
    description:
      "Seamlessly unify your messaging across web, mobile, email, and connected platforms.",
    icon: <ConnectWithoutContactIcon color="primary" fontSize="large" />,
  },
];

const differentiators = [
  {
    title: "Custom-Built AI Engine",
    description:
      "Unlike plug-and-play tools, our AI is designed from the ground up to understand consumer psychology and media trends.",
    icon: <SmartToyIcon color="primary" fontSize="large" />,
  },
  {
    title: "Transparent Optimization",
    description:
      "Know exactly why campaigns are adapting—our platform provides reasoning and logic for every AI adjustment.",
    icon: <InsightsIcon color="primary" fontSize="large" />,
  },
  {
    title: "Self-Learning Feedback Loops",
    description:
      "Our system gets smarter with each interaction, ensuring compounding improvement over time.",
    icon: <AutoFixHighIcon color="primary" fontSize="large" />,
  },
];

const insights = [
  {
    title: "Audience Intelligence",
    description: "Discover deep behavioral patterns and engagement signals.",
    icon: <BarChartIcon color="primary" fontSize="large" />,
  },
  {
    title: "Trend Forecasting",
    description: "See what’s coming before it’s mainstream with AI foresight.",
    icon: <TimelineIcon color="primary" fontSize="large" />,
  },
  {
    title: "Creative Performance Scores",
    description: "Know which content drives conversion—instantly.",
    icon: <InsightsIcon color="primary" fontSize="large" />,
  },
];

const analytics = [
  {
    title: "Real-Time Campaign Tracking",
    description: "Monitor KPIs as they happen—across all platforms.",
    icon: <QueryStatsIcon color="primary" fontSize="large" />,
  },
  {
    title: "Automated A/B Testing",
    description: "Our system constantly tests and improves your assets.",
    icon: <AutoAwesomeIcon color="primary" fontSize="large" />,
  },
];

const stats = [
  {
    icon: <BuildCircleIcon fontSize="large" color="primary" />,
    title: "1000+ Dev Hours",
    description: "Engineered from the ground up to solve real marketing pain points.",
  },
  {
    icon: <BoltIcon fontSize="large" color="primary" />,
    title: "<2s Load Time",
    description: "Performance-optimized across all devices and browsers.",
  },
  {
    icon: <TrackChangesIcon fontSize="large" color="primary" />,
    title: "30+ Early Testers",
    description: "Built with constant feedback from real users and marketers.",
  },
  {
    icon: <VerifiedIcon fontSize="large" color="primary" />,
    title: "Community-Led Roadmap",
    description: "You help shape our features — transparency first.",
  },
  {
    icon: <ShieldIcon fontSize="large" color="primary" />,
    title: "Privacy First",
    description: "Your data is encrypted and never sold. Ever.",
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
    title: "AI-Powered from Day One",
    description: "Our smart engine is trained to adapt and improve automatically.",
  },
];

export default function ServicesPage() {
  const theme = useTheme();

  const gradientBorder = {
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(to right, #2196f3, #21cbf3)"
        : "linear-gradient(to right, #0d47a1, #00bcd4)",
    padding: "1px",
    borderRadius: "16px",
    overflow: "hidden",
    height: "100%",
  };

  const cardInner = {
    background: theme.palette.background.paper,
    padding: 3,
    borderRadius: "14px",
    height: "100%",
    textAlign: "center",
    transition: "0.3s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: theme.shadows[6],
    },
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Container sx={{ py: 10 }}>
        {/* Intro */}
        <FadeInOnScroll>
          <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
            Smarter Marketing with Our AI-Powered Platform
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            maxWidth="720px"
            mx="auto"
            mb={6}
          >
            Our platform revolutionizes how campaigns are built, optimized, and scaled using real-time intelligence and predictive automation.
          </Typography>
        </FadeInOnScroll>

        {/* Features */}
        <FadeInOnScroll>
          <Typography textAlign="center" variant="h5" fontWeight="bold" color="primary" mb={4}>
            Platform Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <FadeItem delay={index * 0.1}>
                  <Box sx={gradientBorder}>
                    <Box sx={cardInner}>
                      <Box mb={1}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </FadeItem>
              </Grid>
            ))}
          </Grid>
        </FadeInOnScroll>

        {/* AI Illustration */}
        <FadeInOnScroll>
          <Box
            sx={{
              my: 8,
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "3 / 2",
              mx: "auto",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/ai-dashboard.jpg"
              alt="AI Dashboard"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </FadeInOnScroll>

        {/* Differentiators */}
        <FadeInOnScroll>
          <Box sx={{ mt: 12 }}>
            <Typography variant="h5" fontWeight="bold" color="primary" textAlign="center" mb={3}>
              Differentiators
            </Typography>
          </Box>
        </FadeInOnScroll>
        <Grid container spacing={4}>
          {differentiators.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FadeItem delay={index * 0.2}>
                <Box sx={gradientBorder}>
                  <Box sx={cardInner}>
                    <Box mb={1}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </FadeItem>
            </Grid>
          ))}
        </Grid>


        {/* AI Insights */}
        <FadeInOnScroll>
          <Box sx={{ mt: 12 }}>
            <Typography variant="h5" fontWeight="bold" color="primary" textAlign="center" mb={3}>
              AI-Powered Insights
            </Typography>
          </Box>
        </FadeInOnScroll>
        <Grid container spacing={4}>
          {insights.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <FadeItem delay={index * 0.1}>
                <Box sx={gradientBorder}>
                  <Box sx={cardInner}>
                    <Box mb={1}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </FadeItem>
            </Grid>
          ))}
        </Grid>


        {/* Analytics */}
        <FadeInOnScroll>
          <Box sx={{ mt: 12 }}>
            <Typography variant="h5" fontWeight="bold" color="primary" textAlign="center" mb={3}>
              Analytics
            </Typography>
          </Box>
        </FadeInOnScroll>
        <Grid container spacing={4}>
        {analytics.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <FadeItem delay={index * 0.1}>
              <Box sx={gradientBorder}>
                <Box sx={cardInner}>
                  <Box mb={1}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </FadeItem>
          </Grid>
        ))}
      </Grid>

        {/* How it works timeline */}
        <FadeInOnScroll>
          <TimelineSection />
        </FadeInOnScroll>

        {/* Stats */}
        <FadeInOnScroll>
  <Container sx={{ py: 10 }}>
    <Typography
      variant="h4"
      fontWeight="bold"
      align="center"
      color="primary"
      gutterBottom
    >
      Built with Purpose — Optimized for Growth
    </Typography>
    <Typography
      align="center"
      color="text.secondary"
      maxWidth="700px"
      mx="auto"
      mb={6}
    >
      We&#39;re just getting started — but we&#39;ve poured passion, precision, and user insight into every line of code. Here&#39;s what we&#39;ve built so far.
    </Typography>

    <Grid container spacing={4}>
      {stats.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <FadeItem delay={index * 0.1}>
            <Box
              sx={{
                backgroundColor: theme => theme.palette.background.paper,
                borderRadius: 4,
                p: 4,
                textAlign: "center",
                boxShadow: 3,
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box mb={1}>{item.icon}</Box>
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </FadeItem>
        </Grid>
      ))}
    </Grid>
  </Container>
</FadeInOnScroll>

        {/* CTA */}
        <FadeInOnScroll>
          <Box textAlign="center" mt={10}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Discover how our AI can grow your brand.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/public/contact">
              Request a Demo
            </Button>
          </Box>
        </FadeInOnScroll>
      </Container>

      <Footer />
    </Box>
  );
}







