// theme/theme.js
import { deepOrange, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Light mode colors
          primary: {
            main: "#d57a54", // copper orange
          },
          secondary: {
            main: "#633820", // dark brown
          },
          background: {
            default: "#ffffff",
            paper: "#f5f5f5",
          },
        }
      : {
          // Dark mode colors
          primary: {
            main: "#f29e7b",
          },
          secondary: {
            main: "#a65f3c",
          },
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
            transition: "background-color 0.4s ease, color 0.4s ease",
        }
    }
    },
  },
});
