import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar";
import { TimerProvider } from "./TimerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HARMONIZE ME",
  description: "EAR TRAINING for singers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TimerProvider>
          <Navbar />
          {children}
        </TimerProvider>
      </body>
    </html>
  );
}
