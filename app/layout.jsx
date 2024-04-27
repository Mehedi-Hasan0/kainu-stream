import { Inter, Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/shared/Nav/Navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const berlinSans = localFont({
  src: [
    {
      path: "../public/fonts/BRLNSDB.woff",
      style: "normal",
    },
  ],
  variable: "--font-berlin-sans",
});

export const metadata = {
  title: "Kainu",
  description: "Streaming vidio games online on live Kainu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${berlinSans.variable} ${urbanist.variable} ${poppins.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
