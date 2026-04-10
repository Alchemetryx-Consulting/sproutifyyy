import type { Metadata } from "next";
import { Urbanist, Cormorant_Garamond, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontLogo = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const fontHeading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const fontBody = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const fontPJS = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sproutifyyy | Fresh Sprouts & Protein Bowls",
  description: "Fresh sprouts, boiled eggs, and protein combos starting at ₹30 in Badlapur, Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontLogo.variable} ${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
