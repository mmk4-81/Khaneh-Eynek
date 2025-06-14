import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khaneh Eynak",
  description: "Eyewear Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
