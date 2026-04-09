import type { Metadata } from "next";
import { Urbanist, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const fontLogo = Urbanist({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
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
