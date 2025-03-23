const tailwindConfig = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF",
          secondary: "#F59E0B",
          accent: "#10B981",
        },
        fontFamily: {
          sans: ["Inter", "Arial", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  
  export default tailwindConfig;
  
  

  
  
  
  
  
  
  
  