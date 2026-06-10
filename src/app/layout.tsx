import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StartProjectButton from "@/components/ui/StartProjectButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DUDEE | Student Creators Collective",
  description: "DUDEE is a premium freelance platform and digital studio powered by an elite collective of talented college student creators.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          <div className="relative overflow-x-clip w-full flex flex-col min-h-screen">
            <Navbar />
            {children}
            <StartProjectButton />
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
