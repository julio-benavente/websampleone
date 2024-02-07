import type { Metadata } from "next";
import "./globals.css";
import { urbanist } from "@/helpers/fonts";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export const metadata: Metadata = {
  title: "Home | Johnson Refrigeration",
  description:
    "Johnson Refrigeration, Inc. is a family-owned business, founded in 1977, specializing in the service, design and installation of residential, commercial, and industrial heating and air conditioning systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
