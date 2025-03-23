import "@/styles/global.css";
import ThemeProviderClient from "@/components/ThemeProviderClient";
import Providers from "@/redux/Providers";

export const metadata = {
  title: "Beltmar Marketing - AI-Powered Marketing Solutions",
  description:
    "Boost your brand with AI-driven marketing strategies and expert digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>
          <Providers>{children} </Providers>
          </ThemeProviderClient>
      </body>
    </html>
  );
}





