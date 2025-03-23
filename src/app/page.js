"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import StaggeredFadeIn from "@/components/StaggeredFadeIn";
import FadeItem from "@/components/FadeItem";
import FaqAccordion from "@/components/FaqAccordion";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import CloudCanvas from "@/components/CloudCanvas";

import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function HomePage() {
  const theme = useTheme();

  const gradientBorder = {
    background: theme.palette.mode === "light"
      ? "linear-gradient(to right, #2196f3, #21cbf3)"
      : "linear-gradient(to right, #0d47a1, #00bcd4)",
    padding: "1px",
    borderRadius: "16px",
    overflow: "hidden",
  };

  const cardInner = {
    background: theme.palette.background.paper,
    borderRadius: "15px",
    paddingTop: "16px",
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

      {/* HERO SECTION */}
      <FadeInOnScroll>
        <Box
          sx={{
            position: "relative",
            py: { xs: 8, md: 12 },
            overflow: "hidden",
          }}
        >
          {/* Background Effects */}
          {theme.palette.mode === "dark" ? <StarfieldCanvas isActive={true} /> : <CloudCanvas isActive={false} />}

          {/* Hero Content */}
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              align="center"
              variant="h2"
              color="primary"
              fontWeight={800}
              gutterBottom
            >
              Elevate Your Brand with AI-Powered Marketing
            </Typography>
            <Typography
              align="center"
              variant="h6"
              color={theme.palette.mode === "light" ? "text.secondary" : "text.primary"}
              gutterBottom
            >
              Build smarter, scale faster, and stand out with cutting-edge digital solutions.
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Link href="/auth/login" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ textTransform: "none", fontWeight: 600 }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/public/services" passHref>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{ textTransform: "none", fontWeight: 600 }}
                >
                  View Services
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
      </FadeInOnScroll>

      {/* SERVICE CARDS */}
      <FadeInOnScroll>
        <Container sx={{ py: 10 }}>
          <StaggeredFadeIn>
            <Typography variant="h4" fontWeight={800} align="center" mb={4}>
              Our Core Services
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: "Content Creation",
                  description: "Boost your brand with engaging, professional content creation!",
                  icon: <ContentPasteIcon fontSize="large" color="primary" />,
                },
                {
                  title: "Web Development",
                  description: "Transform your online presence with expert web development!",
                  icon: <CodeIcon fontSize="large" color="primary" />,
                },
                {
                  title: "Digital Marketing",
                  description: "Drive growth with powerful digital marketing strategies!",
                  icon: <TrendingUpIcon fontSize="large" color="primary" />,
                },
              ].map((service) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <FadeItem>
                    <Box sx={gradientBorder}>
                      <Box sx={cardInner}>
                        <Box>{service.icon}</Box>
                        <CardContent>
                          <Typography variant="h5" color="primary" gutterBottom>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {service.description}
                          </Typography>
                        </CardContent>
                      </Box>
                    </Box>
                  </FadeItem>
                </Grid>
              ))}
            </Grid>
          </StaggeredFadeIn>
        </Container>
      </FadeInOnScroll>

      {/* STRATEGY CARDS */}
      <FadeInOnScroll>
        <Container sx={{ pb: 10 }}>
          <StaggeredFadeIn delay={0.3}>
            <Typography variant="h4" fontWeight={800} align="center" mb={4}>
              Our Marketing Strategies
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: "Gain Digital Advantage",
                  content: "In-depth market research using AI to uncover trends and insights.",
                  icon: <SearchIcon fontSize="large" color="primary" />,
                },
                {
                  title: "Results-Oriented Solutions",
                  content: "Tailored strategies to keep your brand relevant in every climate.",
                  icon: <AutoGraphIcon fontSize="large" color="primary" />,
                },
                {
                  title: "Cutting-Edge Innovation",
                  content: "Real-time optimization through AI for powerful campaign results.",
                  icon: <InsightsIcon fontSize="large" color="primary" />,
                },
              ].map((strategy) => (
                <Grid item xs={12} md={4} key={strategy.title}>
                  <FadeItem>
                    <Box sx={gradientBorder}>
                      <Box sx={cardInner}>
                        <Box>{strategy.icon}</Box>
                        <CardContent>
                          <Typography variant="h6" color="primary" gutterBottom>
                            {strategy.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {strategy.content}
                          </Typography>
                        </CardContent>
                      </Box>
                    </Box>
                  </FadeItem>
                </Grid>
              ))}
            </Grid>
          </StaggeredFadeIn>
        </Container>
      </FadeInOnScroll>
      
      {/* BUILT WITH PURPOSE */}
      <FadeInOnScroll>
        <Container sx={{ py: 10 }}>
          <Typography variant="h4" fontWeight={800} align="center" mb={4}>
            Built with Purpose — Optimized for Growth
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" maxWidth="700px" mx="auto" mb={6}>
            We&#39;re just getting started — but we&#39;ve poured passion, precision, and user insight into every line of code. Here&#39;s what we&#39;ve built so far.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "1000+ Dev Hours",
                description: "Engineered from the ground up to solve real marketing pain points.",
                icon: <AutoFixHighIcon fontSize="large" color="primary" />,
              },
              {
                title: "<2s Load Time",
                description: "Performance-optimized across all devices and browsers.",
                icon: <QueryStatsIcon fontSize="large" color="primary" />,
              },
              {
                title: "30+ Early Testers",
                description: "Built with constant feedback from real users and marketers.",
                icon: <InsightsIcon fontSize="large" color="primary" />,
              },
              {
                title: "Community-Led Roadmap",
                description: "You help shape our features — transparency first.",
                icon: <ConnectWithoutContactIcon fontSize="large" color="primary" />,
              },
              {
                title: "Privacy First",
                description: "Your data is encrypted and never sold. Ever.",
                icon: <SmartToyIcon fontSize="large" color="primary" />,
              },
              {
                title: "AI-Powered from Day One",
                description: "Our smart engine is trained to adapt and improve automatically.",
                icon: <AutoAwesomeIcon fontSize="large" color="primary" />,
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <FadeItem delay={i * 0.1}>
                  <Box sx={gradientBorder}>
                    <Box sx={cardInner}>
                      <Box mb={1}>{item.icon}</Box>
                      <CardContent>
                        <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Box>
                </FadeItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Container sx={{ py: 10 }}>
          <Typography variant="h4" fontWeight={800} align="center" mb={4}>
            Meet the Team Behind the Vision
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
            mb={6}
          >
            A passionate group of builders, creatives, and strategists with one mission: help businesses grow with the power of intelligent marketing.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "Jairus Bethel",
                role: "Founder & Head of Strategy",
                //  Replace with your actual image path
                bio: "Visionary entrepreneur with a background in marketing, development, and tech innovation. Jairus leads the product and growth roadmap.",
              },
              {
                name: "Leonard B.",
                role: "Vice-President & Head of Content",
                // image: "/images/team/tyrell.jpg",
                bio: "Leonard blends strategic thinking with creative storytelling to lead our content vision. With a sharp eye for brand voice and audience connection, he ensures every word drives impact, builds trust, and fuels growth.",
              },
              {
                name: "Serena B.",
                role: "Brand & Community Manager",
                // image: "/images/team/serena.jpg",
                bio: "Passionate about storytelling and connection. Serena ensures our brand feels human and our community feels heard.",
              },
              
            ].map((member, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <FadeItem delay={i * 0.1}>
                  <Box
                    sx={{
                      background: theme.palette.background.paper,
                      borderRadius: 3,
                      textAlign: "center",
                      p: 3,
                      height: "100%",
                      transition: "0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        mx: "auto",
                        mb: 2,
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    </Box>
                    <Typography variant="h6" fontWeight={600}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontStyle="italic">
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {member.bio}
                    </Typography>
                  </Box>
                </FadeItem>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FadeInOnScroll>
\


      {/* FAQ + CONTACT */}
      <FadeInOnScroll>
        <Container sx={{ py: 10 }}>
          <Typography variant="h4" fontWeight="bold" align="center" mb={4}>
            Frequently Asked Questions
          </Typography>
          <FaqAccordion />
        </Container>
      </FadeInOnScroll>
      <ContactForm />
      <Footer />
    </Box>
  );
}







