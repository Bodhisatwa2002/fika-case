import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google"; // Import Roboto Condensed
import "./globals.css";
import { CustomCursor } from "@/components/ui/CursorPointer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  // Add Roboto Condensed
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Fika Case",
  description: "Phone-free classrooms for elevated learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
        <CustomCursor/>
      </body>
    </html>
  );
}
