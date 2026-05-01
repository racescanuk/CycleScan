import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UK cycling events calendar | CycleScan",
  description:
    "Find UK cycling events including sportives, road races, time trials and gravel events. Join the CycleScan waitlist for early access.",
  metadataBase: new URL("https://www.cyclescan.co.uk"),
  verification: {
    google: "ZMjtu9cMIeubzUQLwGC3Jfb0ipKLA5gRrdv5qfOGJsY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}