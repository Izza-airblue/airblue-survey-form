import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const metadata: Metadata = {
  title: "Airblue Survey",
  description: "Airblue Customer Survey Portal",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}