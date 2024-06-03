import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar";
import { TimerProvider } from "./TimerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HARMONEAR",
  description: "EAR TRAINING pour chanteurs et instrumentistes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <TimerProvider>
          <Navbar />
          {children}
        </TimerProvider>
      </body>
    </html>
  );
}
