"use client";

import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>HIIT Rush</title>
      <meta
        name="description"
        content="HIIT Rush is a high-intensity interval training app."
      />
      <meta
        httpEquiv="Content-Security-Policy"
        content="
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com;
          style-src 'self' 'unsafe-inline';
          default-src 'self'; frame-src 'self' https://www.youtube.com;
          "
      />
      <body className="min-h-dvh">
        <Header />
        {children}
      </body>
    </html>
  );
}
