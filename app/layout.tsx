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

        <Script
          src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        
      </body>
    </html>
  );
}