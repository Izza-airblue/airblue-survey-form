import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

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
      <body>{children}

         {/* Bootstrap JS (CDN) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}