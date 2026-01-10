import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neon SaaS - Future of Tech",
  description: "Experience the next generation of software.",
};

import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { SpotlightGrid } from "@/components/SpotlightGrid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-neon-cyan selection:text-black`}
      >
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <SpotlightGrid />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
