import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mpost Back Office Portal",
  description: "Staff Management Portal for Mpost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
