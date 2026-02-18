import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Booked.Dental — Qualified Calls at $20–$30 | Implant & Veneer Clinics",
  description:
    "We help implant and veneer-focused dental clinics generate qualified calls at $20–$30 per call using high-converting Meta ads powered by UGC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
