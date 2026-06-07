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
  openGraph: {
    title: "Synodos-MED | Ο Ψηφιακός Βοηθός του Συνοδού Νοσοκομείου",
    description: "Μια ολοκληρωμένη πλατφόρμα χωρίς servers για την παρακολούθηση υγείας και τη διαχείριση φαρμακευτικής αγωγής. Απόλυτη ιδιωτικότητα.",
    url: "https://synodos-med.gr",
    siteName: "Synodos-MED",
    images: [
      {
        url: "https://synodos-med.gr/icon-512.png",
        width: 512,
        height: 512,
        alt: "Synodos-MED Logo",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synodos-MED | Ο Ψηφιακός Βοηθός",
    description: "Μηδέν servers, απόλυτη ιδιωτικότητα. Κατεβάστε το Synodos-MED τώρα.",
    images: ["https://synodos-med.gr/icon-512.png"],
  },
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
