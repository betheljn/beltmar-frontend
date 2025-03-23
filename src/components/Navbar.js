"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "@/components/ThemeProviderClient";
import { useTheme } from "@mui/material/styles";

const pages = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/public/services" },
  { name: "About", href: "/public/about" },
  { name: "Contact", href: "/public/contact" },
  { name: "Login", href: "/auth/login" },
];

export default function ResponsiveNavbar() {
  const theme = useTheme();
  const { mode, setMode } = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const isNavOpen = Boolean(anchorElNav);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          border: "none",
          boxShadow: "none",
        }}
      >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            justifyContent: "space-between",
            minHeight: "64px",
          }}
        >
          {/* Left Side Logo */}
          <Link href="/" passHref>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                src={
                  mode === "light"
                    ? "/images/Beltmar-black.png"
                    : "/images/Beltmar-white.png"
                }
                alt="Beltmar Logo"
                width={30}
                height={30}
                style={{
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Link>
          {/* Desktop Nav Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2, justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                href={page.href}
                sx={{ color: "text.primary", fontWeight: 500 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Right Side: Theme Toggle + Mobile Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title="Toggle theme">
              <IconButton onClick={toggleTheme} sx={{ color: "text.primary" }}>
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>

            {/* Mobile Menu Toggle */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={isNavOpen ? handleCloseNavMenu : handleOpenNavMenu} color="inherit">
                {isNavOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Box>

          {/* Mobile Menu Dropdown */}
          <Menu
            anchorEl={anchorElNav}
            open={isNavOpen}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  href={page.href}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}







