import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synodos-MED | Ο Ψηφιακός Βοηθός του Συνοδού Νοσοκομείου",
  description: "Ο ψηφιακός συνοδός για όποιον έχει αγαπημένο πρόσωπο στο νοσοκομείο",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
