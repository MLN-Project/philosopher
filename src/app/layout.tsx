import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Which Philosopher Are You?",
  description:
    "A cinematic philosophy personality quiz inspired by classical philosophy and Marxism-Leninism."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
