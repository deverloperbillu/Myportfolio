import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Moon_Dance } from "next/font/google"; // Correct font name for Moon Dance
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Montserrat font
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
  variable: "--fonts-montserrat",
});

// Moon Dance font
const moonDanceFont = Moon_Dance({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--fonts-moondance",
});

export const metadata: Metadata = {
  title: "Syed Bilal Shahid - Personal Portfolio",
  description: "I’m Syed Bilal Shahid, a Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratFont.variable} ${moonDanceFont.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
