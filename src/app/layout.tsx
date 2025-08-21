"use client"
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from '../_components/Footer';
import Nav from '../_components/Nav';
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {!isDashboard && <Nav />}
          {children}
        {!isDashboard && <Footer />}
      </body>
    </html>
  )
}
