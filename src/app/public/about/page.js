"use client";

import { Box, Container, Typography, Grid, Divider, Button } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          py: 10,
          px: 2,
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(to bottom, #ffffff, #f5f5f5)"
              : theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          {/* Heading */}
          <FadeInOnScroll>
            <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
              About Beltmar Marketing
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              color="text.secondary"
              maxWidth="700px"
              mx="auto"
              mb={6}
            >
              We empower brands by blending AI-powered insights with human creativity to deliver exceptional marketing solutions.
            </Typography>
          </FadeInOnScroll>

          {/* Brand Story */}
          <FadeInOnScroll>
            <Grid container spacing={6} alignItems="center" mb={10}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Our Story
                </Typography>
                <Typography color="text.secondary">
                  Beltmar was born from a vision: to give businesses—no matter their size—the power of AI-driven marketing once reserved for enterprise giants. We believe that creativity becomes unstoppable when powered by data and intention. Our team merges next-gen technology with compelling storytelling, so you never have to choose between performance and authenticity.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Why We Exist
                </Typography>
                <Typography color="text.secondary">
                  Traditional marketing is broken—full of guesswork, missed targets, and wasted budgets. We’re here to change that. We exist to make marketing smarter, faster, and more connected to real humans. With AI at the core, we automate the grind so brands can focus on what matters: connection, growth, and purpose.
                </Typography>
              </Grid>
            </Grid>
          </FadeInOnScroll>

          <Divider sx={{ my: 8 }} />

          {/* Vision + Difference */}
          <FadeInOnScroll>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Our Mission
                </Typography>
                <Typography color="text.secondary">
                  To revolutionize digital marketing by building accessible, intelligent systems that enable every brand to reach the right audience with precision, empathy, and purpose.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  What Makes Us Different
                </Typography>
                <Typography color="text.secondary">
                  While most agencies focus on outputs, we focus on outcomes. Our AI tools adapt in real time, learn your audience’s behavior, and evolve your strategy with every insight. We’re not just a marketing company—we’re a growth engine built for the future.
                </Typography>
              </Grid>
            </Grid>
          </FadeInOnScroll>

          {/* CTA */}
          <Box textAlign="center" mt={10}>
            <FadeInOnScroll>
              <Typography variant="h6" mb={2}>
                Ready to make your brand unforgettable?
              </Typography>
              <Link href="/public/contact" passHref>
                <Button variant="contained" color="primary" size="large">
                  Let’s Talk
                </Button>
              </Link>
            </FadeInOnScroll>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

